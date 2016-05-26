oninit(function(exports, shared) {
    // TODO: explore better require
    const React = shared.React = require('react');
    const ReactDOM = shared.ReactDOM = require('react-dom');
    shared.makeComponent = function makeComponent(args) {
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
        setMod (modName, modVal) {
            // TODO: onBeforeSetMod and onSetMod
            this.setState({
                mods: Object.assign({}, this.state.mods, { [modName]: modVal })
            });
        }
    };
});
