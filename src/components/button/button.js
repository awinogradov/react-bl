const React = require('react');

const Control = require('../control/control');
const provide = require('../../provider/provider');

module.exports = class Button extends Control {

    constructor(props) {
        super(props);

        this._focusedByPointer = false;
        this._isPointerPressInProgress = false;
    }

    _focus() {
        if(this._isPointerPressInProgress) return;

        if(this._focusedByPointer) {
            this.setStateAndMod({focused: true});
        } else {
            this.setStateAndMod({'focused-hard': true});
        }
    }

    _onFocus(e) {
        this._focus();

        this.props.onFocus && this.props.onFocus(e, this.state);
    }

    _onBlur(e) {
        this.setStateAndMod({pressed: false, 'focused-hard': false});

        super._onBlur(e);
    }

    _onClick(e) {
        if(!this.props.disabled) {
            this.props.onClick && this.onClick(e, this.state);
        }
    }

    _onMouseLeave(e) {
        if(this._isPointerPressInProgress) {
            this.setStateAndMod({pressed: false});
        }

        super._onMouseLeave(e);
    }

    _onMouseDown(e) {
        this._isPointerPressInProgress = true;

        if(!this.props.disabled) {
            this._focusedByPointer = true;
            this.setStateAndMod({pressed: true});

            this.props.onMouseDown && this.props.onMouseDown(e, this.state);
        }
    }

    _onMouseUp(e) {
        this._isPointerPressInProgress = false;

        this._focusedByPointer = true;
        this._focus();
        this._focusedByPointer = false;

        this.setStateAndMod({pressed: false});

        this.props.onMouseUp && this.props.onMouseUp(e, this.state);
    }

    render() {
        return provide({
            block: this.bem.block,
            attrs: Object.assign({
                onMouseEnter: this._onMouseEnter.bind(this),
                onMouseLeave: this._onMouseLeave.bind(this),
                onFocus: this._onFocus.bind(this),
                onBlur: this._onBlur.bind(this),
                onClick: this._onClick.bind(this),
                onMouseDown: this._onMouseDown.bind(this),
                onMouseUp: this._onMouseUp.bind(this),
                'aria-disabled': this.props.disabled
            }, this.props.attrs),
            mods: {
                size: this.props.size,
                theme: this.props.theme,
                view: this.props.view,
                hovered: this.state.hovered,
                focused: this.state.focused,
                'focused-hard': this.state['focused-hard'],
                pressed: this.state.pressed,
                togglable: this.props.togglable,
                disabled: this.props.disabled
            },
            mix: this.props.mix,
            title: this.props.title,
            text: this.props.text,
            content: this.props.children
        });
    }
}
