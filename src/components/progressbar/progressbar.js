const React = require('react');
const provide = require('../../provider/provider');

module.exports = class Progressbar extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return provide({
            block: 'progressbar',
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
