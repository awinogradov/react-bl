'use strict';

const React = require('react');

const Checkbox = require('../../../src').Checkbox;
require('bem-loader!../../design/checkbox/checkbox.css');

module.exports = class Checkboxes extends React.Component {

    render() {
        return (
            <div className='checkboxes'>
                <h2>Checkboxes</h2>

                <Checkbox theme='islands' size='m' text='Size M' />
                &nbsp;
                <Checkbox theme='islands' size='m' text='Size M' checked={true} />
                &nbsp;
                <Checkbox theme='islands' size='m' text='Size M' disabled={true} />
                &nbsp;
                <Checkbox theme='islands' size='m' text='Size M' type='button' />
                <br/>
                <Checkbox theme='islands' size='l' text='Size L' />
                &nbsp;
                <Checkbox theme='islands' size='l' text='Size L' checked={true} />
                &nbsp;
                <Checkbox theme='islands' size='l' text='Size M' disabled={true} />
                &nbsp;
                <Checkbox theme='islands' size='l' text='Size L' type='button' />
            </div>
        );
    }
}
