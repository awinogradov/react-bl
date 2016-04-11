'use strict';

const React = require('react');

const BEM = require('../../core/bem/bem');
const provide = require('../../provider/provider');

module.exports = class Progressbar extends BEM {

    render() {
        return provide({
            block: this.bem.block,
            attrs: {
                'aria-valuenow': this.props.val + '%',
                style: {
                    width: this.props.val + '%'
                }
            },
            mods: {
                theme: this.props.theme
            },
            val: this.props.val
        });
    }
}
