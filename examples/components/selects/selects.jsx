const React = require('react');
const ReactDOM = require('react-dom');

const Select = require('../../../src').Select;
const Icon = require('../../../src').Icon;

require('bem-loader!../../design/select/select.css');
require('./selects.styl');

const OPTIONS_1 = [
    {
        value: 1,
        text: 'Green',
    },
    {
        value: 2,
        text: 'Gold',
    },
    {
        value: 3,
        text: 'Rose',
    }
];

const OPTIONS_2 = [
    {
        value: 1,
        text: 'Ivan',
    },
    {
        value: 2,
        text: 'Anton',
    },
    {
        value: 3,
        text: 'Nikita',
    }
];


module.exports = class Selects extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='selects'>
                <h2>Selects</h2>
                <h3>Radio mode</h3>
                <Select
                    text='Choose color'
                    theme='islands'
                    mode='radio'
                    size='m'
                    options={ OPTIONS_1 }
                />
                <h3>Check mode</h3>
                <Select
                    text='Choose names'
                    theme='islands'
                    mode='check'
                    size='m'
                    options={ OPTIONS_2 }
                />
            </div>
        );
    }
}
