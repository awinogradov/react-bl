const React = require('react');
const Component = React.Component;
const PropTypes = React.PropTypes;

const BEM = require('../../core/bem/bem');

module.exports = class Control extends BEM {

    _onFocus(e) {
        this.setStateAndMod({focused: true});

        this.props.onFocus && this.props.onFocus(e, this.state);
    }

    _onMouseEnter(e) {
        this.setStateAndMod({hovered: true});

        this.props.onMouseEnter && this.props.onMouseEnter(e, this.state);
    }

    _onMouseLeave(e) {
        this.setStateAndMod({hovered: false});

        this.props.onMouseLeave && this.props.onMouseLeave(e, this.state);
    }

    _onBlur(e) {
        this.setStateAndMod({focused: false, hovered: false});

        this.props.onBlur && this.props.onBlur(e, this.state);
    }
}
