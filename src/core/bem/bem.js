const React = require('react');
const Component = React.Component;
const block = require('bem-cn');
const paramCase = require('param-case');

module.exports = class BEM extends Component {
    constructor(props) {
        super(props);
        this.bem = this.bem || {};
        this.bem.block = block(paramCase(this.constructor.name));
        this.bem.mix = props.mix;
        this.bem.elem = (name, mods) => (this._buildElemClass(name, mods));
        this.bem._refs = {};

        this.bem.class = this._buildClass();
    }

    setMod(mod) {
        this.bem.mods = Object.assign({}, this.bem.mods, mod);
        this.bem.class = this._buildClass();
    }

    setStateAndMod(object) {
        this.setMod(object);
        this.setState(object);
    }

    _buildClass() {
        return this
        .bem
        .block(
            this.bem.block,
            this.bem.mods
        )(
            this.bem.elem
        ).mix(
            this.bem.mix
        );
    }

    _buildElemClass(name, mods) {
        this.bem.ref = (elem) => {this.bem._refs[name] = elem};
        return this
        .bem
        .block(
            name,
            mods
        );
    }
}
