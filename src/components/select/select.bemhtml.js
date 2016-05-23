block('select')(
    content()(function() {
        const React = require('react');
        const Popup = require('../src/components/popup/popup');
        const original = applyNext();
        const selectComponent = this.ctx._select;

        original[1] = React.createElement(Popup, {
            ref: popup => {
                selectComponent._popup = popup;
            },
            directions: ['bottom-left'],
            target: 'anchor',
            theme: this.mods.theme,
            autoclosable: true,
            visible: this.ctx.bindings.isOpened,
            onClickOutside: this.ctx.bindings.onClickOutside
        }, { block: this.block, mods: this.mods, elem: 'menu', _select: this.ctx });

        return original;
    })
);
