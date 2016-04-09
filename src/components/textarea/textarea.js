const React = require('react');

const Input = require('../input/input');
const provide = require('../../provider/provider');

module.exports = class Textarea extends Input {

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
            mods: {
                size: this.props.size,
                theme: this.props.theme,
                hovered: this.state.hovered,
                focused: this.state.focused,
                disabled: this.props.disabled
            },
            id: this.props.id,
            name: this.props.name,
            tabIndex: this.props.tabIndex,
            placeholder: this.props.placeholder,
            val: this.state.val
        });
    }

}
