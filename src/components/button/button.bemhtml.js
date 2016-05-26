oninit(function(exports, shared) {
    // here will be button component
});
block('button').attrs()({ ref: 'control' });
block('button').match(function () {
    return !this.ctx._react;
})(
    def()(function () {
        var ctx = this.extend({}, this.ctx);
        return this.createElement(this.components.control, { bemjson: ctx });
    })
);
