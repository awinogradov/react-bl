import React, { Component } from 'react';
import block from 'bem-cn';

export default class BEM extends Component {
    constructor(props, context) {
        super(props, context);
        this.bem = this.bem || {};
        this.bem.block = block(this.constructor.name.toLowerCase());
        this.bem.mix = props.mix;
        this.bem.elem = (name, mods) => (this._buildElemClass(name, mods));
        this.bem._refs = {};

        //this.bem.findElem = (name) => (this._findElem(name));

        this._buildClass();
    }

    setMod(mod) {
        this.bem.mods = Object.assign({}, this.bem.mods, mod);
        this.setState(this.bem.mods);
        this._buildClass();
    }

    _buildClass() {
        this.bem.class = this.bem.block(this.bem.block, this.bem.mods)(this.bem.elem).mix(this.bem.mix);
    }

    _buildElemClass(name, mods) {
        this.bem.ref = (elem) => {this.bem._refs[name] = elem};
        return this.bem.block(name, mods);
    }

    //_findElem = (name) => (this.bem._refs[name]);
}
