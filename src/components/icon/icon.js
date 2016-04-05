const React = require('react');
const provide = require('../../provide');

module.exports = class Icon extends React.Component {

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
