const React = require('react');

const Radio = require('../../../src').Radio;
require('bem-loader!../../design/radio/radio.css');

module.exports = class Radios extends React.Component {

    render() {
        return (
            <div className='radios'>
                <h2>Radios</h2>

                <Radio theme='islands' size='m' text='Size M' />
                <Radio theme='islands' size='l' text='Size L' />
                <br/>
                <Radio theme='islands' type='button' size='m' text='Size M' />
                <Radio theme='islands' type='button' size='l' text='Size L' />
            </div>
        );
    }
}
