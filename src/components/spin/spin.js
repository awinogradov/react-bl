const React = require('react');
const provide = require('../../provider/provider');

module.exports = class Spin extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            visible: false
        };
    }

    render() {
        return provide({
            block: 'spin',
            mods: {
                size: this.props.size,
                theme: this.props.theme,
                visible: this.props.visible
            }
        });
    }
}
