'use strict';

block('menu')(
    attrs()(function() {
        const originalAttrs = applyNext();

        originalAttrs.tabIndex = originalAttrs.tabindex;
        delete originalAttrs.tabindex;

        return originalAttrs;
    })
);
