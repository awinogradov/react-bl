block('checkbox').mod('type', 'button')(
    content()(function() {
        const React = require('react');
        const Button = require('../src/components/button/button');

        const ctx = this.ctx,
            mods = this.mods;

        const originalContent = applyNext();

        // Replace XJST Button
        // FIXME: support icon!
        originalContent[0] = React.createElement(Button, {
            theme: mods.theme,
            size: mods.size,
            togglable: 'check',
            text: ctx.text,
            attrs: { // FIXME: make plain props
                role: 'checkbox',
                'aria-pressed': undefined,
                'aria-checked': String(!!mods.checked)
            },
            title: ctx.title
        });

        return originalContent;
    })
);
