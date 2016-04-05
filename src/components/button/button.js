var React = require('react');
var provide = require('../../provider/provider');

module.exports = class Button extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            hovered: false,
            focused: false
        };
    }

    render() {
        return provide({
            block: 'button',
            attrs: {
                onMouseEnter: () => (this.setState({ hovered: true })),
                onFocus: () => (this.setState({ focused: true })),
                onMouseLeave: () => (this.setState({ hovered: false })),
                onBlur: () => (this.setState({ focused: false }))
            },
            mods: {
                size: this.props.size,
                theme: this.props.theme,
                view: this.props.view,
                hovered: this.state.hovered,
                focused: this.state.focused,
                disabled: this.props.disabled
            },
            text: this.props.text,
            content: this.props.children
        });
    }
}
