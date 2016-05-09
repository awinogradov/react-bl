block('select')(
    content()(function() {
        'use strict';

        // FIXME: it's should work fine!
        return applyNext();

        const React = require('react');
        const Popup = require('../src/components/popup/popup.js');

        return [
            { elem : 'button' },
            React.createElement(Popup, {
                direction: ['bottom-left', 'bottom-right', 'top-left', 'top-right'],
                target: 'anchor',
                theme: this.mods.theme,
                autoclosable: true
            }, { block: this.block, mods: this.mods, elem: 'menu' })
        ];
    })
);
