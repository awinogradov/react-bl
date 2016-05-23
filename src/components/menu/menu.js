'use strict';

const React = require('react');

const Control = require('../control/control');
const provide = require('../../provider/provider');

class Menu extends Control {

    render() {
        return provide({
            block: this.bem.block,
            attrs: {
                onMouseEnter: this._onMouseEnter.bind(this),
                onMouseLeave: this._onMouseLeave.bind(this),
                // TODO
                onKeyDown: this.handleKeyDown.bind(this),
                onFocus: this._onFocus.bind(this),
                onBlur: this._onBlur.bind(this)
            },
            mods: {
                mode: this.props.mode,
                size: this.props.size,
                theme: this.props.theme,
                hovered: this.state.hovered,
                focused: this.state.focused,
                disabled: this.props.disabled
            },
            mix: this.props.mix,
            val: this.state.value,
            content: this.props.children
        });
    }

    handleKeyDown(e) {
        if (this.props.onKeyDown) {
            this.props.onKeyDown(e);
        }
    }
}

Menu.Group = require('./__group/menu__group');

module.exports = Menu;
