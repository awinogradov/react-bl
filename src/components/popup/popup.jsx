'use strict';

// TODO
// - support block props
//   - zIndexGroupLevel
// - nested popups
// - hide popup if target isn't visible
// - handle window resize - do we really need it?
// - tests

const React = require('react');
const ReactDOM = require('react-dom');

const BEM = require('../../core/bem/bem');
const provide = require('../../provider/provider');

const ZINDEX_FACTOR = 1000;
const visiblePopupsZIndexes = {};

const RenderInBody = require('../render-in-body/render-in-body.jsx');
const calcBestDrawingParams = require('./calc-drawing-params').calcBestDrawingParams;
const isEventOutsideClientBounds = require('../../lib/window').isEventOutsideClientBounds;

module.exports = class Popup extends BEM {

    constructor(props) {
        super(props);

        // TODO
        // this._parentPopup = undefined;
        // this._zIndex = null;
        // this._zIndexGroupLevel = null;

        this.domElementPopup = null;
        this.anchor = null;
        this.position = null;
        this.clickEventBindTimeout = null;
        this.isWindowClickBinded = false;

        this.defaultProps = {
            visible: false,
            autoclosable: false,
            target: 'anchor',
            size: 's'
        };

        this.state = {
            direction: null,
            hovered: false,
            styles: {
                top: 0,
                left: 0
            }
        };

        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
        this.handleWindowClick = this.handleWindowClick.bind(this);

        this.redraw = this.redraw.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.visible) {
            this.redraw();
        }
    }

    componentDidMount() {
        this.props.autoclosable && this.ensureClickEvent();
    }

    componentWillUnmount() {
        this.props.autoclosable && this.ensureClickEvent(true);
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.autoclosable) {
            if (prevProps.onClickOutside !== this.props.onClickOutside) {
                this.ensureClickEvent();
            } else {
                if (prevProps.visible !== this.props.visible) {
                    this.ensureClickEvent(!this.props.visible);
                }
            }
        }
    }

    render() {
        return (
            <RenderInBody>
                {
                    provide({
                        block: 'popup',
                        attrs: {
                            className: this.props.className,
                            'aria-hidden': !this.state.visible,
                            style: `top: ${this.state.styles.top}; left: ${this.state.styles.left}`,
                            onMouseEnter: this.handleMouseEnter,
                            onMouseLeave: this.handleMouseLeave,
                            ref: (popup) => {
                                this._popup = popup;
                            }
                        },
                        mods: {
                            theme: this.props.theme,
                            autoclosable: !!this.props.autoclosable,
                            target: this.props.target,
                            size: this.props.size,
                            visible: this.props.visible,
                            invalid: this.props.invalid,
                            type: (this.props.target === 'anchor') && (this.props.type === 'tooltip') && this.props.type,
                            height: this.props.height,
                            direction: this.state.direction,
                        },
                        directions: [this.state.direction],
                        mainOffset: this.props.mainOffset,
                        secondaryOffset: this.props.secondaryOffset,
                        viewportOffset: this.props.viewportOffset,
                        // zIndexGroupLevel: this.props.zIndexGroupLevel,
                        content: [
                            this.props.children,
                        { /*<ResizeSensor onResize={ !!this.state.styles && this.redraw } /> */ }
                        ],
                    })
                }
            </RenderInBody>
        );
    }

    handleMouseEnter() {
        this.setState({ hovered: true });

        if (this.props.onMouseEnter) {
            this.props.onMouseEnter();
        }
    }

    handleMouseLeave() {
        this.setState({ hovered: false });

        if (this.props.onMouseLeave) {
            this.props.onMouseLeave();
        }
    }

    handleWindowClick(e) {
        if (this.props.autoclosable && !!this.domElementPopup && isEventOutsideClientBounds(e, this.domElementPopup)) {
            if (this.props.onClickOutside) {
                this.props.onClickOutside(e);
            }
        }
    }

    ensureClickEvent(isDestroy) {
        let isNeedBindEvent = isDestroy !== undefined ? !isDestroy : this.props.visible;

        // We need timeouts to not to catch the event that causes
        // popup opening (because it propagates to the `window`).
        if (this.clickEventBindTimeout) {
            clearTimeout(this.clickEventBindTimeout);
            this.clickEventBindTimeout = null;
        }

        this.clickEventBindTimeout = setTimeout(() => {
            if (!this.isWindowClickBinded && isNeedBindEvent) {
                window.addEventListener('click', this.handleWindowClick);
                this.isWindowClickBinded = true;
            } else if (this.isWindowClickBinded && !isNeedBindEvent) {
                window.removeEventListener('click', this.handleWindowClick);
                this.isWindowClickBinded = false;
            }
        }, 0);
    }

    setTarget(target) {
        this.anchor = target;
        this.redraw();
    }

    redraw() {
        if (this.props.target === 'anchor' && !this.anchor || this.props.target === 'position' && !this.position) {
            throw 'Cannot show popup without target or position';
        }

        if (!this.domElementPopup) {
            this.domElementPopup = ReactDOM.findDOMNode(this._popup);
        }

        let drawingParams = calcBestDrawingParams({
            directions: this.props.directions,
            bestDirection: this.state.direction,
            isTargetAnchor: this.props.target === 'anchor',
            domElementPopup: this.domElementPopup,
            offset: {
                main: this.props.mainOffset,
                second: this.props.secondaryOffset,
                viewport: this.props.viewportOffset
            },
            targetPosition: this.position,
            targetAnchor: this.anchor
        });

        this.setState({
            direction: drawingParams.direction,
            styles: this.getDrawingCss(drawingParams)
        });
    }

    getDrawingCss(drawingParams) {
        return {
            left: drawingParams.left,
            top: drawingParams.top
        };
    }

    setPosition(left, top) {
        this.position = {
            left: left,
            top: top
        };
        this.redraw();
    }

    // TODO
//     _calcZIndexGroupLevel() {
//         let res = this.props.zIndexGroupLevel,
//             parentPopup = this._getParentPopup();

//         parentPopup && (res += parentPopup._zIndexGroupLevel);

//         return res;
//     }

//     _captureZIndex() {
//         let level = this._zIndexGroupLevel === null?
//                 this._zIndexGroupLevel = this._calcZIndexGroupLevel() :
//                 this._zIndexGroupLevel,
//             zIndexes = visiblePopupsZIndexes[level] || (visiblePopupsZIndexes[level] = [(level + 1) * ZINDEX_FACTOR]),
//             prevZIndex = this._zIndex;

//         this._zIndex = zIndexes[zIndexes.push(zIndexes[zIndexes.length - 1] + 1) - 1];
//         // this._zIndex !== prevZIndex && this.domElem.css('z-index', this._zIndex);

//         return this;
//     }

//     _releaseZIndex() {
//         let zIndexes = visiblePopupsZIndexes[this._zIndexGroupLevel];
//         zIndexes.splice(zIndexes.indexOf(this._zIndex), 1);

//         return this;
//     }

//     _recaptureZIndex() {
//         this._releaseZIndex();
//         this._zIndexGroupLevel = null;

//         return this._captureZIndex();
//     }

//     _getParentPopup() {
//         return this._parentPopup;
//     }

}
