block('input').mod('has-clear', true).elem('box')(
    content()(function() {
        const originalContent = applyNext();

        // extend input__clear by React bindings
        originalContent[1].attrs = originalContent[1].attrs || {};
        originalContent[1].attrs.onClick = this._input.attrs.onClearClick;
        return originalContent;
    })
);
