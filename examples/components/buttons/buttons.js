const React = require('react');

const Button = require('../../../src').Button;
require('bem-loader!../styles/button/button.css');

export class Buttons extends React.Component {

    render() {
        return (
            <div className='buttons'>
                <h2>Buttons</h2>

                <Button theme='islands' size='s' text='Size S' />
                &nbsp;
                <Button theme='islands' size='s' text='Size S' disabled={true} />
                &nbsp;
                <Button theme='islands' size='s' text='Size S' view='action' />
                <br/>
                <Button theme='islands' size='m' text='Size M' />
                &nbsp;
                <Button theme='islands' size='m' text='Size M' disabled={true} />
                &nbsp;
                <Button theme='islands' size='m' text='Size M' view='action' />
                <br/>
                <Button theme='islands' size='l' text='Size L' />
                &nbsp;
                <Button theme='islands' size='l' text='Size L' disabled={true} />
                &nbsp;
                <Button theme='islands' size='l' text='Size L' view='action' />
                <br/>
                <Button theme='islands' size='xl' text='Size XL' />
                &nbsp;
                <Button theme='islands' size='xl' text='Size XL' disabled={true} />
                &nbsp;
                <Button theme='islands' size='xl' text='Size XL' view='action' />
            </div>
        );
}
