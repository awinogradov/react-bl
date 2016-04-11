const React = require('react');

const BEM = require('../../core/bem/bem');
const provide = require('../../provider/provider');

module.exports = class Dropdown extends BEM {

    _onSwitcherClick() {
        this.setStateAndMod({opened: true});
        this.props.onSwitcherClick && this.props.onSwitcherClick();
    }

    render() {
        return provide({
            block: this.bem.block,
            attrs: {
                'aria-expanded': this.props.opened,
                onClick: this._onSwitcherClick
            },
            mods: {
                size: this.props.size,
                theme: this.props.theme,
                switcher: this.props.type,
                opened: this.props.opened,
                disabled: this.props.disabled
            },
            switcher: this.props.switcher,
            popup: this.props.popup
        });
    }
}
