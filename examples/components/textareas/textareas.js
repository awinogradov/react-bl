const React = require('react');

const Textarea = require('../../../src').Textarea;
require('bem-loader!../../design/textarea/textarea.css');

module.exports = class Textareas extends React.Component {

    render() {
        return (
            <div className='textareas'>
                <h2>Textareas</h2>

                <Textarea theme='islands' size='s' val='Size S' />
                &nbsp;
                <Textarea theme='islands' size='s' val='Size S' disabled={true} />
                <br/>
                <Textarea theme='islands' size='m' val='Size M' />
                &nbsp;
                <Textarea theme='islands' size='m' val='Size M' disabled={true} />
                <br/>
                <Textarea theme='islands' size='l' val='Size L' />
                &nbsp;
                <Textarea theme='islands' size='l' val='Size L' disabled={true} />
                <br/>
                <Textarea theme='islands' size='xl' val='Size XL' />
                &nbsp;
                <Textarea theme='islands' size='xl' val='Size XL' disabled={true} />
            </div>
        );
    }
}
