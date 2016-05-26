oninit(function(exports, shared) {
    var Control = shared.BEMContext.prototype.components.control;

    shared.BEMContext.prototype.components.input = class Input extends Control {
        constructor(props) {
            super(props);
            this._onInputChanged = this._onInputChanged.bind(this);
            this._onClearClick = this._onClearClick.bind(this);
        }
        componentDidMount () {
            super.componentDidMount();
            this.refs.control.addEventListener('input', this._onInputChanged);
            this.refs.clear
                && this.refs.clear.addEventListener('click', this._onClearClick);
        }
        getVal () {
            return this._val
        }
        setVal (val) {
            val = String(val);

            if(this._val !== val) {
                this._val = val;
                var control = this.refs.control;
                control.value !== val && (control.value = val);
            }
        }
        _onInputChanged () {
            this.setVal(this.refs.control.value);
        }
        _onClearClick () {
            this.setVal('')
        }
    }
});
