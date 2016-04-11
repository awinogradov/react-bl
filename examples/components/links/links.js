const React = require('react');

const Link = require('../../../src').Link;
require('bem-loader!../../design/link/link.css');

module.exports = class Buttons extends React.Component {

    render() {
        return (
            <div className='links'>
                <h2>Links</h2>

                <Link theme='islands' size='s' url='http://google.com'>Link S</Link>
                &nbsp;
                <Link theme='islands' size='s' pseudo={true}>Link S</Link>
                &nbsp;
                <Link theme='islands' size='s' disabled={true}>Link S</Link>
                <br/>
                <Link theme='islands' size='m' url='http://google.com'>Link M</Link>
                &nbsp;
                <Link theme='islands' size='m' pseudo={true}>Link M</Link>
                &nbsp;
                <Link theme='islands' size='m' disabled={true}>Link M</Link>
                <br/>
                <Link theme='islands' size='l' url='http://google.com'>Link L</Link>
                &nbsp;
                <Link theme='islands' size='l' pseudo={true}>Link L</Link>
                &nbsp;
                <Link theme='islands' size='l' disabled={true}>Link L</Link>
                <br/>
                <Link theme='islands' size='xl' url='http://google.com'>Link XL</Link>
                &nbsp;
                <Link theme='islands' size='xl' pseudo={true}>Link XL</Link>
                &nbsp;
                <Link theme='islands' size='xl' disabled={true}>Link XL</Link>
            </div>
        );
    }
}
