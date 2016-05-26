'use strict';

const React = require('react');

const templates = require('../../../dist/templates');

module.exports = class Button extends React.Component {
    render() {
        return templates.apply({
            block: 'button',
            mods: {
                size: this.props.size,
                theme: this.props.theme,
                view: this.props.view,
                focused: this.props.focused,
                togglable: this.props.togglable,
                disabled: this.props.disabled
            },
            mix: this.props.mix,
            title: this.props.title,
            text: this.props.text,
            content: this.props.children
        });
    }
}

