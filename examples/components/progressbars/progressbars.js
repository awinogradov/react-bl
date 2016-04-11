const React = require('react');

const Progressbar = require('../../../src').Progressbar;
require('bem-loader!../../design/progressbar/progressbar.css');

module.exports = class Progressbars extends React.Component {

    render() {
        return (
            <div className='progressbars'>
                <h2>Progressbars</h2>

                <Progressbar theme='islands' val={'12'} />
                <br />
                <Progressbar theme='islands' val={'89'} />
                <br />
                <Progressbar theme='islands' val={'49'} />
            </div>
        );
    }
}
