const React = require('react');

const BEM = require('../../core/bem/bem');
const provide = require('../../provider/provider');

const ZINDEX_FACTOR = 1000;
const visiblePopupsZIndexes = {};
const undef = undefined;

module.exports = class Popup extends BEM {

    constructor(props) {
        super(props);

        this._parentPopup = undef;
        this._zIndex = null;
        this._zIndexGroupLevel = null;
        this._isAttachedToScope = false;
    }

    componentWillMount() {
        this.setStateAndMod({visible: false});
    }

    _calcZIndexGroupLevel() {
        let res = this.props.zIndexGroupLevel,
            parentPopup = this._getParentPopup();

        parentPopup && (res += parentPopup._zIndexGroupLevel);

        return res;
    }

    _captureZIndex() {
        let level = this._zIndexGroupLevel === null?
                this._zIndexGroupLevel = this._calcZIndexGroupLevel() :
                this._zIndexGroupLevel,
            zIndexes = visiblePopupsZIndexes[level] || (visiblePopupsZIndexes[level] = [(level + 1) * ZINDEX_FACTOR]),
            prevZIndex = this._zIndex;

        this._zIndex = zIndexes[zIndexes.push(zIndexes[zIndexes.length - 1] + 1) - 1];
        // this._zIndex !== prevZIndex && this.domElem.css('z-index', this._zIndex);

        return this;
    }

    _releaseZIndex() {
        let zIndexes = visiblePopupsZIndexes[this._zIndexGroupLevel];
        zIndexes.splice(zIndexes.indexOf(this._zIndex), 1);

        return this;
    }

    _recaptureZIndex() {
        this._releaseZIndex();
        this._zIndexGroupLevel = null;

        return this._captureZIndex();
    }

    _getParentPopup() {
        return this._parentPopup;
    }

    getDefaultParams() {
        return {
            zIndexGroupLevel: 0
        };
    }

    render() {
        return provide({
            block: this.bem.block,
            attrs: {
                'aria-hidden': !this.state.visible,
                style: {
                    zIndex: this._zIndex
                }
            },
            mods: {
                theme: this.props.theme,
                autoclosable: this.props.autoclosable,
                target: this.props.target,
                visible: this.state.visible
            },
            directions: this.props.directions,
            mainOffset: this.props.mainOffset,
            secondaryOffset: this.props.secondaryOffset,
            viewportOffset: this.props.viewportOffset,
            zIndexGroupLevel: this.props.zIndexGroupLevel,
            content: this.props.children
        });
    }
}
