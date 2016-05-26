block('*').match(function () {
    return !this.ctx._react;
})(
    def()(function () {
        if (apply('js') && this.components[this.ctx.block]) {
            return this.createElement(this.components[this.ctx.block], { 
                bemjson: this.extend({}, this.ctx),
                apply: this.reapply.bind(this)
            });
        } else {
            return applyNext()
        }
    })
);
