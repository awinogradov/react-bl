'use strict';

const React = require('react');

const Control = require('../control/control');
const provide = require('../../provider/provider');

module.exports = class Input extends Control {

    _onChange() {
        this.props.onChange && this.props.onChange(e, this.state);
    }

    _onClearClick() {
        console.log('hi there');
    }

    componentWillMount() {
        this.state.val = this.props.val;
    }

    render() {
        return provide({
            block: this.bem.block,
            attrs: {
                onMouseEnter: this._onMouseEnter.bind(this),
                onMouseLeave: this._onMouseLeave.bind(this),
                onFocus: this._onFocus.bind(this),
                onBlur: this._onBlur.bind(this),
                onChange: this._onChange.bind(this),
                onClearClick: this._onClearClick.bind(this)
            },
            mods: {
                size: this.props.size,
                theme: this.props.theme,
                hovered: this.state.hovered,
                focused: this.state.focused,
                'has-clear': this.props.hasClear,
                disabled: this.props.disabled
            },
            id: this.props.id,
            tabIndex: this.props.tabIndex,
            name: this.props.name,
            placeholder: this.props.placeholder,
            val: this.state.val
        });
    }
}
