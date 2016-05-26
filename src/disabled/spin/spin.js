'use strict';

const React = require('react');

const BEM = require('../../core/bem/bem');
const provide = require('../../provider/provider');

module.exports = class Spin extends BEM {

    render() {
        return provide({
            block: this.bem.class,
            mods: {
                size: this.props.size,
                theme: this.props.theme,
                visible: this.props.visible
            }
        });
    }
}
