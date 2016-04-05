const React = require('react');
const provide = require('../../provide');

module.exports = class Select extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            hovered: false,
            focused: false
        };
    }

    render() {
        return provide({
            block: 'select',
            attrs: {
                onMouseEnter: () => (this.setState({ hovered: true })),
                onFocus: () => (this.setState({ focused: true })),
                onMouseLeave: () => (this.setState({ hovered: false })),
                onBlur: () => (this.setState({ focused: false }))
            },
            mods: {
                mode: this.props.mode,
                size: this.props.size,
                theme: this.props.theme,
                hovered: this.state.hovered,
                focused: this.state.focused,
                disabled: this.props.disabled
            },
            id: this.props.id,
            name: this.props.name,
            text: this.props.text,
            val: this.props.val,
            options: this.props.options
        });
    }
}
