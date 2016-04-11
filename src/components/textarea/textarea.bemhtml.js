block('textarea')(
    attrs()(function() {
        'use strict';
        
        const originalAttrs = applyNext();

        originalAttrs.defaultValue = this.ctx.val;
        originalAttrs.tabIndex = originalAttrs.tabindex,
        delete originalAttrs.tabindex;
        originalAttrs.placeHolder = originalAttrs.placeholder
        delete originalAttrs.placeholder;
        originalAttrs.autoComplete = originalAttrs.autocomplete;
        delete originalAttrs.autocomplete;

        return originalAttrs;
    }),
    content()(function() {
        return;
    })
);
