const React = require('react');
const provide = require('../../provider/provider');

module.exports = class Checkbox extends React.Component {

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
            block: 'checkbox',
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
                type: this.props.type,
                checked: this.state.checked || this.props.checked,
                hovered: this.state.hovered,
                focused: this.state.focused,
                disabled: this.props.disabled
            },
            id: this.props.id,
            name: this.props.name,
            val: val,
            text: this.props.text
        });
    }
}
