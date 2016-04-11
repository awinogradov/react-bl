block('radio').elem('control')(
    tag()('input'),

    attrs()(function() {
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
