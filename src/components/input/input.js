const React = require('react');
const provide = require('../../provider/provider');

module.exports = class Input extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            hovered: false,
            focused: false,
            value: '',
        };

        this.handleChange = this.handleChange.bind(this);
    }

    render() {
        let val = this.state.value || this.props.val;
        return provide({
            block: 'input',
            attrs: {
                onMouseEnter: () => (this.setState({ hovered: true })),
                onFocus: () => (this.setState({ focused: true })),
                onMouseLeave: () => (this.setState({ hovered: false })),
                onBlur: () => (this.setState({ focused: false })),
                onChange: this.handleChange,
                // onKeyDown: this.handleKeyDown,
                // onKeyUp: this.handleKeyUp,
            },
            val: val,
            id: this.props.id,
            name: this.props.name,
            mods: {
                size: this.props.size,
                theme: this.props.theme,
                hovered: this.state.hovered,
                focused: this.state.focused,
                'has-clear': this.props.hasClear,
                disabled: this.props.disabled
            }
        });
    }

    handleChange(e) {
        let value = e.target.value;

        this.setState({ value });
    }
}
