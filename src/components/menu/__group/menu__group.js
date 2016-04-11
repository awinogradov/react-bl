const React = require('react');

const BEM = require('../../../core/bem/bem');
const provide = require('../../../provider/provider');

module.exports = class MenuElemGroup extends BEM {

    render() {
        return provide({
            block: this.bem.block,
            elem: 'group',
            title: this.props.title,
            content: this.props.children
        });
    }
}
