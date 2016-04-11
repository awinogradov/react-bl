block('checkbox-group')(
    content()(function() {
        var mods = this.mods,
            ctx = this.ctx,
            val = ctx.val,
            isValDef = typeof val !== 'undefined';

        const React = require('react');
        const Checkbox = require('../src/components/checkbox/checkbox');

        if(isValDef && !Array.isArray(val)) throw Error('checkbox-group: val must be an array');

        return (ctx.options || []).map(function(option, i) {
            return [
                !!i && !mods.type && { tag : 'br' },
                React.createElement(Checkbox, {
                    theme: mods.theme,
                    size: mods.size,
                    type: mods.type,
                    checked: isValDef && val.indexOf(option.val) > -1,
                    disabled: option.disabled || mods.disabled,
                    name: ctx.name,
                    val: option.val,
                    text: option.text,
                    title: option.title,
                    icon: option.icon
                })
            ];
        });
    })
);
