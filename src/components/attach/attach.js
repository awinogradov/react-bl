const React = require('react');
const provide = require('../../provider/provider');

module.exports = class Attach extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            focused: false
        };
    }

    render() {
        return provide({
            block: 'attach',
            attrs: {
                onFocus: () => (this.setState({ focused: true })),
                onBlur: () => (this.setState({ focused: false }))
            },
            mods: {
                size: this.props.size,
                theme: this.props.theme,
                focused: this.state.focused,
                disabled: this.props.disabled
            },
            name: this.props.name,
            button: this.props.button,
            noFileText: this.props.noFileText
        });
    }
}
