var React = require('react');
var provide = require('../../provide');

require('bem-loader!./image.css');
export class Image extends React.Component {

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
