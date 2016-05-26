oninit(function(exports, shared) {
    // TODO: explore better require
    const React = shared.React = require('react');
    const ReactDOM = shared.ReactDOM = require('react-dom');

    function makeComponent(args) {
        let children = args.slice(2).map(a => Array.isArray(a) ? makeComponent(a) : a);

        Object.keys(args[1]).reduce(function (collect, key) {
            switch (key) {
                case 'tabindex':
                    collect['tabIndex'] = collect['tabindex'];
                    delete collect['tabindex'];
                    return collect
                case 'autocomplete':
                    collect['autoComplete'] = collect['autocomplete'];
                    delete collect['autocomplete'];
                    return collect
                case 'value':
                    collect['defaultValue'] = collect['value'];
                    delete collect['value'];
                    return collect
                default:
                    return collect
            }
        }, args[1])
        // if (args[1] && args[1].style) {
        //     let objectStyle = parseAttrs({
        //         style: args[1].style,
        //     }).style;
        //     let reactStyle = {};
        //     Object.keys(objectStyle).forEach(key => {
        //         reactStyle[camelCase(key)] = objectStyle[key];
        //     });
        //     args[1].style = reactStyle;
        // }

        return React.createElement.apply(null, args.slice(0, 2).concat(children));
    };

    shared.BEMContext.prototype.createElement = React.createElement;
    shared.BEMContext.prototype.components = shared.BEMContext.prototype.components || {};
    shared.BEMContext.prototype.components['i-bem-react'] = class BEM extends React.Component {
        constructor (props) {
            super(props);
            this.state = props.bemjson;
            this.state._react = this;
        }
        componentDidMount () {
            this.domNode = ReactDOM.findDOMNode(this);
        }
        getMod (modName) {
            return modName in this.state.mods && this.state.mods[modName] || ''
        }
        setMod (modName, modVal) {
            // TODO: onBeforeSetMod and onSetMod
            var typeModVal = typeof modVal;
            if(typeModVal === 'undefined') {
                modVal = true;
            } else if(typeModVal === 'boolean') {
                modVal === false && (modVal = '');
            } else {
                modVal = modVal.toString();
            }

            this.setState({
                mods: Object.assign({}, this.state.mods, { [modName]: modVal })
            });
        }
        hasMod (modName, modVal) {
            var typeModVal = typeof modVal;
            typeModVal === 'undefined' || typeModVal === 'boolean' || (modVal = modVal.toString());

            var res = this.getMod(modName) === (modVal || '');
            return arguments.length === 1? !res : res;
        }
        toggleMod (modName) {
            this.setMod(modName, !this.state.mods[modName]);
        }
        render () {
            var vidom = exports.apply(Object.assign({}, this.state));
            return makeComponent(vidom);
        }
    };
});
