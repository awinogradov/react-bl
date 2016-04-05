var React = require('react');
var provide = require('../../provide');

require('bem-loader!./spin.css');
export class Spin extends React.Component {

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
