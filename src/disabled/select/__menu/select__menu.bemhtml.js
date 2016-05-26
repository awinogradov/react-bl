block('select').elem('menu')(
    def()(function() {
        const React = require('react');
        const Menu = require('../src/components/menu/menu');
        const MenuItem = require('../src/components/menu-item/menu-item');
        const _select = this.ctx._select;
        const selectComponent = _select._select;

        return React.createElement.apply(React, [
            Menu,
            {
                mix: { block : this.block, elem : this.elem },
                ref: menu => selectComponent._menu = menu,
                size: _select.mods.size,
                disabled: _select.mods.disabled,
                mode: _select.mods.mode,
                content: _select.options,
                checkedItems: _select.bindings.checkedItems,
                style: _select.bindings.popupMenuWidth,
                onKeyDown: _select.bindings.onKeyDown,
                theme: _select.mods.theme,
            }].concat(_select.options.map(option => React.createElement(
                MenuItem,
                {
                    onClick: _select.bindings.onOptionCheck,
                    theme: _select.mods.theme,
                    val: option.value,
                }, option.content)
            ))
        );
    })
);
