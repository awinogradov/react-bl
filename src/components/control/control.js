const React = require('react');
const Component = React.Component;
const PropTypes = React.PropTypes;

const BEM = require('../../core/bem/bem');

module.exports = class Control extends BEM {

    constructor(props) {
        super(props);
        this.state = {};
    }

    _onFocus(e) {
        this.setMod({focused: true});
        this.setState({focused: true});
        this.props.onFocus &&
        this.props.onFocus(e, this.state);
    }

    _onMouseEnter(e) {
        if(!this.props.disabled) {
            this.setMod({hovered: true});
            this.setState({hovered: true});
            this.props.onMouseEnter &&
            this.props.onMouseEnter(e, this.state);
        }
    }

    _onMouseLeave(e) {
        this.setMod({hovered: false});
        this.setState({hovered: false});
        this.props.onMouseLeave &&
        this.props.onMouseLeave(e, this.state);
    }

    _onBlur(e) {
        this.setMod({focused: false, hovered: false});
        this.setState({focused: false, hovered: false});
        this.props.onBlur &&
        this.props.onBlur(e, this.state);
    }
}
