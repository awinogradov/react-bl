'use strict';

const React = require('react');

const CheckboxGroup = require('../../../src').CheckboxGroup;
require('bem-loader!../../design/checkbox-group/checkbox-group.css');

module.exports = class CheckboxGroups extends React.Component {

    render() {
        return (
            <div className='checkbox-groups'>
                <h2>Checkbox groups</h2>

                <CheckboxGroup
                    theme='islands'
                    size='m'
                    options={[
                        { val: 1, text: 'option 1' },
                        { val: 2, text: 'option 2' },
                        { val: 3, text: 'option 3' }
                    ]}
                    val={[1]} />
                &nbsp;
                <CheckboxGroup
                    theme='islands'
                    size='l'
                    options={[
                        { val: 1, text: 'option 1' },
                        { val: 2, text: 'option 2', disabled: true }
                    ]}
                    val={[1]} />

                &nbsp;
                <CheckboxGroup
                    theme='islands'
                    size='l'
                    type='button'
                    options={[
                        { val: 1, text: 'option 1' },
                        { val: 2, text: 'option 2' },
                        { val: 3, text: 'option 3' }
                    ]}
                    val={[1]} />
            </div>
        );
    }
}
