const React = require('react');

const Icon = require('../../../src').Icon;
require('../../design/icon/icon.styl');

module.exports = class Icons extends React.Component {

    render() {
        return (
            <div className='icons'>
                <h2>Icons</h2>

                <Icon
                    theme='islands'
                    url='//red-badger.com/blog/wp-content/uploads/2015/04/react-logo-1000-transparent.png' />
                &nbsp;
                <Icon>
                    <svg width="16" height="16">
                        <path d="M1 13v2h14v-2h-14zm13-7h-3v-5h-6v5.031l-3-.031 6 6 6-6z" />
                    </svg>
                </Icon>
            </div>
        );
    }
}
