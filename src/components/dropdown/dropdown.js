const React = require('react');
const provide = require('../../provider/provider');

module.exports = class Dropdown extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return provide({
            block: 'dropdown',
            attrs: {
                onMouseEnter: () => (this.setState({ hovered: true })),
                onFocus: () => (this.setState({ focused: true })),
                onMouseLeave: () => (this.setState({ hovered: false })),
                onBlur: () => (this.setState({ focused: false }))
            },
            mods: {
                size: this.props.size,
                theme: this.props.theme,
                switcher: this.props.type,
                opened: this.props.opened,
                disabled: this.props.disabled
            },
            switcher: this.props.switcher,
            popup: this.props.popup
        });
    }
}
