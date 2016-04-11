const React = require('react');

const Dropdown = require('../../../src').Dropdown;
require('bem-loader!../../design/popup/popup.css');

module.exports = class Dropdowns extends React.Component {

    render() {
        return (
            <div className='dropdowns'>
                <h2>Dropdowns</h2>

                <Dropdown
                    theme='islands'
                    size='m'
                    type='link'
                    switcher='Click here'
                    popup='Content here' />
            </div>
        );
    }
}
