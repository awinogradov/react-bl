block('popup')
    .match(function () { return !!this._select })
    .def()(function() {
        const React = require('react');
        const Popup = require('../src/components/popup/popup');
        const selectComponent = this._select;

        return React.createElement(Popup, {
            ref: popup => {
                selectComponent._select._popup = popup;
            },
            directions: this.ctx.directions,
            target: 'anchor',
            theme: this.mods.theme,
            autoclosable: true,
            visible: selectComponent.bindings.isOpened,
            onClickOutside: selectComponent.bindings.onClickOutside
        }, { block: selectComponent.block, mods: selectComponent.mods, elem: 'menu', _select: selectComponent });
    });
