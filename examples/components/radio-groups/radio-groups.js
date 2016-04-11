'use strict';

const React = require('react');

const RadioGroup = require('../../../src').RadioGroup;
require('bem-loader!../../design/radio-group/radio-group.css');

module.exports = class RadioGroups extends React.Component {

    render() {
        return (
            <div className='radio-groups'>
                <h2>Radio groups</h2>

                <RadioGroup
                    theme='islands'
                    size='m'
                    options={[
                        { val: 1, text: 'option 1' },
                        { val: 2, text: 'option 2' },
                        { val: 3, text: 'option 3' }
                    ]}
                    val={[1]} />
                &nbsp;
                <RadioGroup
                    theme='islands'
                    size='l'
                    options={[
                        { val: 1, text: 'option 1' },
                        { val: 2, text: 'option 2', disabled: true }
                    ]}
                    val={[1]} />

                &nbsp;
                <RadioGroup
                    theme='islands'
                    size='l'
                    type='button'
                    options={[
                        { val: 1, text: 'option 1' },
                        { val: 2, text: 'option 2', disabled: true }
                    ]}
                    val={[1]} />
            </div>
        );
    }
}
