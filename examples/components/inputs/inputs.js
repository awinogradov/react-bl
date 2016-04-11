'use strict';

const React = require('react');

const Input = require('../../../src').Input;
require('bem-loader!../../design/input/input.css');

module.exports = class Inputs extends React.Component {

    render() {
        return (
            <div className='inputs'>
                <h2>Inputs</h2>

                <Input theme='islands' size='s' val='Size S' />
                <Input theme='islands' size='s' val='Size S' disabled={true} />
                &nbsp;
                <br/>
                <Input theme='islands' size='m' val='Size M' />
                &nbsp;
                <Input theme='islands' size='m' val='Size M' disabled={true} />
                <br/>
                <Input theme='islands' size='l' val='Size L' />
                &nbsp;
                <Input theme='islands' size='l' val='Size L' disabled={true} />
                <br/>
                <Input theme='islands' size='xl' val='Size XL' />
                &nbsp;
                <Input theme='islands' size='xl' val='Size XL' disabled={true} />
                <br/>
                <Input theme='islands' size='xl' val='Size XL' hasClear={true} />
            </div>
        );
    }
}
