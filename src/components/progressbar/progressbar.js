const React = require('react');
const provide = require('../../provider/provider');

module.exports = class Progressbar extends React.Component {

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
