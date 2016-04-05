const React = require('react');
const provide = require('../../provide');

module.exports = class RadioGroup extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            focused: false,
            value: ''
        };
    }

    render() {
        let val = this.state.value || this.props.val;
        return provide({
            block: 'radio-group',
            attrs: {
                onFocus: () => (this.setState({ focused: true })),
                onBlur: () => (this.setState({ focused: false })),
                onClick: () => (this.setState({ checked: true }))
            },
            mods: {
                size: this.props.size,
                theme: this.props.theme,
                focused: this.state.focused,
                desabled: this.props.disabled,
                type: this.props.type
            },
            options: this.props.options,
            val: val,
            name: this.props.name
        });
    }
}
