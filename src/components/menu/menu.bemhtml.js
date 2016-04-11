block('menu')(
    attrs()(function() {
        'use strict';
        
        const originalAttrs = applyNext();

        originalAttrs.tabIndex = originalAttrs.tabindex;
        delete originalAttrs.tabindex;

        return originalAttrs;
    })
);
