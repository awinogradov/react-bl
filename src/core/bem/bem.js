'use strict';

const React = require('react');
const Component = React.Component;
const block = require('bem-cn');
const paramCase = require('param-case');
const naming = require('bem-naming');

module.exports = class BEM extends Component {

    constructor(props) {
        super(props);

        this.state = {};
        this.bem = this.bem || {};

        this.bem.entity = this._camelToBem(this.constructor.name);
        this.bem.block = block(this.bem.entity.block);
        this.bem.elem = (name, mods) => (this._buildElemClass(name, mods));
        this.bem.mix = props.mix;

        this.bem._refs = {};

        this._initMod = this.bem.entity.modName ? {
            [this.bem.entity.modName]: this.bem.entity.modVal
        } : {};

        this.bem.class = this._buildClass();
    }

    setMod(mod) {
        this.bem.mods = Object.assign({}, this._initMod, this.bem.mods, mod);
        this.bem.class = this._buildClass();
    }

    setStateAndMod(object) {
        this.setMod(object);
        this.setState(object);
    }

    _camelToBem(str) {
        let entity = str.replace('Elem', '__');
        entity = entity.replace('Mod', '_');
        entity = entity.replace('Val', '_');

        entity = naming.parse(entity);
        entity.block = paramCase(entity.block);
        Object.keys(entity).forEach(key => {
            entity[key] = entity[key].toLowerCase();
        });

        return entity;
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
