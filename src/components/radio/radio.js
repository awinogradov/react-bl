const React = require('react');
const provide = require('../../provide');

module.exports = class Radio extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            hovered: false,
            focused: false,
            value: ''
        };
    }

    render() {
        let val = this.state.value || this.props.val;
        return provide({
            block: 'radio',
            attrs: {
                onMouseEnter: () => (this.setState({ hovered: true })),
                onFocus: () => (this.setState({ focused: true })),
                onMouseLeave: () => (this.setState({ hovered: false })),
                onBlur: () => (this.setState({ focused: false })),
                onClick: () => (this.setState({ checked: true }))
            },
            mods: {
                size: this.props.size,
                theme: this.props.theme,
                view: this.props.view,
                hovered: this.state.hovered,
                focused: this.state.focused,
                checked: this.state.checked,
                type: this.props.type
            },
            val: val,
            name: this.props.name,
            text: this.props.text,
            icon: this.props.icon,
            title: this.props.title,
            content: this.props.children
        });
    }
}
