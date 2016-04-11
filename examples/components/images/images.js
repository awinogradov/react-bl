'use strict';

const React = require('react');

const Image = require('../../../src').Image;

module.exports = class Images extends React.Component {

    render() {
        return (
            <div className='images'>
                <h2>Images</h2>

                <Image
                    theme='islands'
                    url='https://img-fotki.yandex.ru/get/16159/259818507.0/0_130be6_4116d8e7_S'
                    title= 'bem.info' />
                &nbsp;
                <Image
                    url='https://img-fotki.yandex.ru/get/16159/259818507.0/0_130be6_4116d8e7_S'
                    title= 'bem.info'
                    width='200px'
                    height='100px' />
                &nbsp;
                <Image>
                    <svg width="15" height="16">
                        <path d="M13.5.5l-8 12L1.7 8l-1 1.6L5.6 15l9.1-13.4z" />
                    </svg>
                </Image>
            </div>
        );
    }
}
