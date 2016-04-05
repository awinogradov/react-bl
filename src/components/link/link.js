const React = require('react');
const provide = require('../../provide');

module.exports = class Link extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            hovered: false,
            focused: false,
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
    }

    render() {
       return provide({
            block: 'link',
            content: this.props.children,
            attrs: {
                tabIndex: this.props.tabIndex,
                onClick: this.handleClick,
                onFocus: this.handleFocus,
                onBlur: this.handleBlur,
                onMouseEnter: this.handleMouseEnter,
                onMouseLeave: this.handleMouseLeave,
            },
            mods: {
                size: this.props.size,
                theme: this.props.theme,
                disabled: this.props.disabled,
                pseudo: this.props.pseudo,
                focused: this.state.focused,
                hovered: this.state.hovered
            }
        });
    }

    handleClick(e) {
        if (!!this.props.pseudo) {
            e.preventDefault();
        }
        if (this.props.onClick) {
            this.props.onClick();
        }
    }

    handleFocus() {
        this.setState({ focused: true });

        if (this.props.onFocus) {
            this.props.onFocus();
        }
    }

    handleBlur() {
        this.setState({ focused: false });

        if (this.props.onBlur) {
            this.props.onBlur();
        }
    }

    handleMouseEnter() {
        this.setState({ hovered: true });

        if (this.props.onMouseEnter) {
            this.props.onMouseEnter();
        }
    }

    handleMouseLeave() {
        this.setState({ hovered: false });

        if (this.props.onMouseLeave) {
            this.props.onMouseLeave();
        }
    }
}
