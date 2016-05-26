'use strict';

const React = require('react');

const Input = require('../../../src').Input;
require('bem-loader!../../design/input/input.css');

module.exports = class Inputs extends React.Component {

    render() {
        return (
            <div className='inputs'>
                <h2>Inputs</h2>

                <Input theme='islands' size='s' placeholder='Size S' />
                <Input theme='islands' size='s' placeholder='Size S' disabled={true} />
                &nbsp;
                <br/>
                <Input theme='islands' size='m' placeholder='Size M' />
                &nbsp;
                <Input theme='islands' size='m' placeholder='Size M' disabled={true} />
                <br/>
                <Input theme='islands' size='l' placeholder='Size L' />
                &nbsp;
                <Input theme='islands' size='l' placeholder='Size L' disabled={true} />
                <br/>
                <Input theme='islands' size='xl' placeholder='Size XL' />
                &nbsp;
                <Input theme='islands' size='xl' placeholder='Size XL' disabled={true} />
                <br/>
                <Input theme='islands' size='xl' val='Size XL' hasClear={true} />
            </div>
        );
    }
}
