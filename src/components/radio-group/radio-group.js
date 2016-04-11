const React = require('react');

const BEM = require('../../core/bem/bem');
const provide = require('../../provider/provider');

module.exports = class RadioGroup extends BEM {

    render() {
        return provide({
            block: this.bem.block,
            attrs: {

            },
            mods: {
                type: this.props.type,
                size: this.props.size,
                theme: this.props.theme,
                hovered: this.state.hovered,
                focused: this.state.focused,
                disabled: this.props.disabled
            },
            name: this.props.name,
            val: this.props.val,
            options: this.props.options
        });
    }
}
