const React = require('react');

const Control = require('../control/control');
const provide = require('../../provider/provider');

module.exports = class Radio extends Control {

    _onChange() {
        this.props.disabled || this.setStateAndMod({checked: true});

        this.props.onChange && this.props.onChange(e, this.state);
    }

    componentWillMount() {
        this.state.checked = this.props.checked;
    }

    render() {
        return provide({
            block: this.bem.block,
            attrs: {
                onMouseEnter: this._onMouseEnter.bind(this),
                onMouseLeave: this._onMouseLeave.bind(this),
                onFocus: this._onFocus.bind(this),
                onBlur: this._onBlur.bind(this),
                onChange: this._onChange.bind(this)
            },
            attrs: {
                onMouseEnter: this._onMouseEnter.bind(this),
                onMouseLeave: this._onMouseLeave.bind(this),
                onFocus: this._onFocus.bind(this),
                onBlur: this._onBlur.bind(this),
                onChange: this._onChange.bind(this)
            },
            mods: {
                size: this.props.size,
                theme: this.props.theme,
                type: this.props.type,
                checked: this.state.checked,
                hovered: this.state.hovered,
                focused: this.state.focused,
                disabled: this.props.disabled
            },
            val: this.props.val,
            name: this.props.name,
            tabIndex: this.props.tabIndex,
            title: this.props.title,
            icon: this.props.icon,
            text: this.props.text
        });
    }
}
