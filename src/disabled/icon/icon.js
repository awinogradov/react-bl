'use strict';

const React = require('react');

const BEM = require('../../core/bem/bem');
const provide = require('../../provider/provider');

module.exports = class Icon extends BEM {

    render() {
        return provide({
            block: this.bem.block,
            mods: {
                size: this.props.size,
                theme: this.props.theme
            },
            url: this.props.url,
            content: this.props.children
        });
    }
}
