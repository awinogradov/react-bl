block('dropdown').mod('switcher', 'link').elem('switcher').def()(function() {
    'use strict';

    // FIXME: it's should work fine!
    return applyNext();

    const React = require('react');
    const Link = require('../components/link/link');
    const dropdown = this._dropdown;
    const switcher = dropdown.switcher;

    if(Array.isArray(switcher)) return switcher;

    let dropdownMods = this.mods;
    return this.isSimple(switcher) ?
        applyCtx(React.createElement(Link, {
            theme: dropdownMods.theme,
            pseudo: true,
            attrs: {
                'aria-haspopup': true,
                'aria-controls': this._popupId,
                'aria-expanded': false
            },
            disabled: dropdownMods.disabled,
            mix: apply('mix')
        }, switcher)) :
        applyCtx(switcher);
});
