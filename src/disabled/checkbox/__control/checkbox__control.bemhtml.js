block('checkbox').elem('control')(
    attrs()(function() {
        'use strict';
        
        const originalAttrs = applyNext();

        originalAttrs.autoComplete = originalAttrs.autocomplete;
        delete originalAttrs.autocomplete;
        originalAttrs.defaultValue = originalAttrs.value;
        delete originalAttrs.value;
        originalAttrs.defaultChecked = originalAttrs.checked;
        delete originalAttrs.checked;

        return originalAttrs;
    })
);
