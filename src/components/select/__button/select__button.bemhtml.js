block('select').elem('button')(
    def()(function() {
        var select = this._select,
            ctx = this.ctx,
            mods = this.mods;

        const React = require('react');
        const Button = require('../components/button/button');
        const selectComponent = select._select;

        return React.createElement(Button, {
                ref: (button) => {
                    selectComponent._button = button;
                },
                mix: { block : this.block, elem : this.elem },
                size: mods.size,
                view: mods.view,
                // focused : mods.focused,
                disabled: mods.disabled,
                checked: mods.mode !== 'radio' && !!this._checkedOptions.length,
                onClick: this._select.bindings.onButtonClick,
                theme: mods.theme,
                // role : 'listbox',
                // 'aria-owns' : this._optionsIds.join(' '),
                // 'aria-multiselectable' : mods.mode === 'check'? 'true' : undefined,
                // 'aria-labelledby' : this._selectTextId
            },
            [
                { elem: 'text', content: select.text },
                { block : 'icon', mix : { block : 'select', elem : 'tick' } }
            ]
        );
    })
);
