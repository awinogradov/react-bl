var React = require('react');
var provide = require('../../provide');

require('bem-loader!./icon.css');
export class Icon extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return provide({
            block: 'icon',
            url: this.props.url,
            content: this.props.children
        });
    }
}
