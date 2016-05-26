'use strict';

const React = require('react');
const templates = require('../../../dist/templates');

module.exports = function Button (props) {
    return templates.apply({
        block: 'button',
        mods: {
            size: props.size,
            theme: props.theme,
            view: props.view,
            focused: props.focused,
            togglable: props.togglable,
            disabled: props.disabled
        },
        mix: props.mix,
        title: props.title,
        text: props.text,
        content: props.children
    });
}
