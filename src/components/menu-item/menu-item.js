const React = require('react');

const BEM = require('../../core/bem/bem');
const provide = require('../../provider/provider');

module.exports = class MenuItem extends BEM {

    _onMouseEnter(e) {
        this.setStateAndMod({hovered: true});

        this.props.onMouseEnter && this.props.onMouseEnter(e, this.state);
    }

    _onMouseLeave(e) {
        this.setStateAndMod({hovered: false});

        this.props.onMouseLeave && this.props.onMouseLeave(e, this.state);
    }

    _onClick(e) {
        if(!this.props.disabled) {
            this.props.onClick && this.onClick(e, this.state);
        }
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
                onClick: this._onClick.bind(this),
                'aria-disabled': this.props.disabled,
                'aria-checked': this.props.checked
            },
            mods: {
                type: this.props.link,
                size: this.props.size,
                theme: this.props.theme,
                checked: this.props.checked,
                disabled: this.props.disabled
            },
            val: this.state.val,
            content: this.props.children
        });
    }
}
