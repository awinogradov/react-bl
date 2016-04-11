'use strict';

const React = require('react');

const Spin = require('../../../src').Spin;
require('bem-loader!../../design/spin/spin.css');

module.exports = class Spins extends React.Component {

    render() {
        return (
            <div className='spins'>
                <h2>Spins</h2>

                <Spin theme='islands' size='s' visible={true} />
                <Spin theme='islands' size='m' visible={true} />
                <Spin theme='islands' size='l' visible={true} />
                <Spin theme='islands' size='xl' visible={true} />
            </div>
        );
    }
}
