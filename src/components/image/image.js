const React = require('react');
const provide = require('../../provide');

module.exports = class Image extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return provide({
            block: 'image',
            url: this.props.url,
            title: this.props.title,
            alt: this.props.alt,
            width: this.props.width,
            height: this.props.height,
            content: this.props.children
        });
    }
}
