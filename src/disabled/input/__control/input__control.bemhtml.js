block('input').elem('control')(
    attrs()(function() {
        'use strict';
        
        const originalAttrs = applyNext();

        originalAttrs.defaultValue = originalAttrs.value;
        delete originalAttrs.value;
        originalAttrs.tabIndex = originalAttrs.tabindex,
        delete originalAttrs.tabindex;
        originalAttrs.placeHolder = originalAttrs.placeholder
        delete originalAttrs.placeholder;
        originalAttrs.autoComplete = originalAttrs.autocomplete;
        delete originalAttrs.autocomplete;

        return originalAttrs;
    })
);
