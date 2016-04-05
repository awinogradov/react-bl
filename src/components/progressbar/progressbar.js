var React = require('react');
var provide = require('../../provide');

require('bem-loader!./progressbar.css');
export class Progressbar extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return provide({
            block: 'progressbar',
            mods: {
                theme: this.props.theme
            },
            val: this.props.val
        });
    }
}
