'use strict';

const React = require('react');

const Control = require('../control/control');
const provide = require('../../provider/provider');

module.exports = class Link extends Control {

    constructor(props, context) {
        super(props, context);
    }

    _onClick(e) {
        if(this.props.disabled || this.props.pseudo) {
            e.preventDefault();
        }

        this.props.onClick && this.onClick(e, this.state);
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
                tabIndex: this.props.tabIndex,
                'aria-disabled': this.props.disabled,
                target: this.props.target
            }, this.props.attrs),
            mods: {
                size: this.props.size,
                theme: this.props.theme,
                pseudo: this.props.pseudo,
                focused: this.state.focused,
                hovered: this.state.hovered,
                disabled: this.props.disabled
            },
            mix: this.props.mix,
            url: this.props.url,
            content: this.props.children
        });
    }
}
