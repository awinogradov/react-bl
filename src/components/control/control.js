// TODO: POC

const React = require('react');
const Component = React.Component;
const PropTypes = React.PropTypes;

const BEM = require('../../core/bem/bem');

module.exports = class Control extends BEM {
    // constructor(props, context) {
    //     super(props, context);
    // }
    //
    // static propTypes = {
    //     className: PropTypes.string,
    //     focused: PropTypes.bool,
    //     hovered: PropTypes.bool,
    //     disabled: PropTypes.bool,
    //     size: PropTypes.string
    // };
    // static defaultProps = {
    //     size: 'm',
    //     focused: false,
    //     hovered: false,
    //     disabled: false
    // };
    //
    // _handleFocus(e) {
    //     this.setMod({focused: true});
    //     this.props.onFocus && this.props.onFocus(e, this.state);
    // };
    //
    // _handleMouseEnter(e) {
    //     this.setMod({hovered: true});
    //     this.props.onMouseEnter && this.props.onMouseEnter(e, this.state);
    // };
    //
    // _handleMouseLeave(e) {
    //     this.setMod({hovered: false});
    //     this.props.onMouseLeave && this.props.onMouseLeave(e, this.state);
    // };
    //
    // _handleBlur(e) {
    //     this.setMod({focused: false, hovered: false});
    //     this.props.onBlur && this.props.onBlur(e, this.state);
    // };
}
