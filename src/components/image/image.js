const React = require('react');

const BEM = require('../../core/bem/bem');
const provide = require('../../provider/provider');

module.exports = class Image extends BEM {

    render() {
        return provide({
            block: this.bem.block,
            mods: {
                size: this.props.size,
                theme: this.props.theme
            },
            url: this.props.url,
            title: this.props.title,
            alt: this.props.alt,
            width: this.props.width,
            height: this.props.height,
            content: this.props.children
        });
    }
}
