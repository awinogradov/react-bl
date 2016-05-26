'use strict';

const React = require('react');
const templates = require('../../../dist/templates');

module.exports = function Input (props) {
    return templates.apply({
        block: 'input',
        mods: {
            size: props.size,
            theme: props.theme,
            'has-clear': props.hasClear,
            disabled: props.disabled
        },
        id: props.id,
        tabIndex: props.tabIndex,
        name: props.name,
        placeholder: props.placeholder,
        val: props.val
    });
}
