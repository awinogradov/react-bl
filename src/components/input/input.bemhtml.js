oninit(function(exports, shared) {
    // here will be input component
});
block('input').match(function () {
    return !this.ctx._react;
})(
    def()(function () {
        var ctx = this.extend({}, this.ctx);
        return this.createElement(this.components.control, { bemjson: ctx });
    })
);
