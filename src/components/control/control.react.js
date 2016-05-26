const BEM = require('../../core/i-bem-react/i-bem-react.react')

class Control extends BEM {
    constructor (props) {
        super(props);

        this._onMouseEnter = this._onMouseEnter.bind(this);
        this._onMouseLeave = this._onMouseLeave.bind(this);
        this._onFocus = this._onFocus.bind(this);
        this._onBlur = this._onBlur.bind(this);
    }
    componentDidMount () {
        super.componentDidMount();
        this.domNode.addEventListener('mouseenter', this._onMouseEnter);
        this.refs.control.addEventListener('focus', this._onFocus);
    }
    _onFocus () {
        if (this.state.mods.disabled) return;
        this.setMod('focused', true);
        this.refs.control.addEventListener('blur', this._onBlur);
    }

    _onMouseEnter () {
        if (this.state.mods.disabled) return;
        this.setMod('hovered', true);
        this.domNode.addEventListener('mouseleave', this._onMouseLeave);
    }

    _onMouseLeave () {
        this.setMod('hovered', false);
        this.domNode.removeEventListener('mouseleave', this._onMouseLeave);
    }

    _onBlur () {
        this.setMod('focused', false);
        this.setMod('hovered', false);
        this.refs.control.removeEventListener('blur', this._onBlur);
    }
};

module.exports = Control 
