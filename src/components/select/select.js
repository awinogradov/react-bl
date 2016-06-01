'use strict';

const ReactDOM = require ('react-dom');
const BEM = require('../../core/bem/bem');
const provide = require('../../provider/provider');

module.exports = class Select extends BEM {

    constructor(props) {
        super(props);

        this.handleOptionCheck = this.handleOptionCheck.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.updatePopupMenuStyles = this.updatePopupMenuStyles.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);

        this.timeoutId = null;

        this.state = {
            opened: !!this.props.opened,
            checkedItems: this.props.checkedItems || [],
            popupMenuStyles: {}
        };
    }

    componentDidMount() {
        this._popup.setTarget(ReactDOM.findDOMNode(this._button));
        this.updatePopupMenuStyles();
    }

    render() {
        return provide({
            block: 'select',
            options: this.renderOptionsList(this.props.options),
            text: this.renderButtonContent(),
            name: this.props.name,
            val: this.state.checkedItems,
            mods: {
                mode: this.props.mode,
                size: this.props.size,
                width: this.props.width,
                theme: this.props.theme,
                disabled: this.props.disabled,
                focused: this.state.focused,
            },
            bindings: {
                onButtonClick: this.handleButtonClick,
                onClickOutside: this.handleClickOutside,
                onOptionCheck: this.handleOptionCheck,
                // TODO
                onKeyDown: this.handleKeyDown,
                isOpened: this.state.opened,
                checkedItems: this.props.checkedItems || this.state.checkedItems,
                popupMenuWidth: this.state.popupMenuWidth
            },
            _select: this
        });
    }

    renderOptionsList(options) {
        return (
            options.map(option => {
                if (option.type === 'group' && !!option.content) {
                    let content = this.renderOptionsList(option.content);

                    return ({
                        type: 'group',
                        title: option.title,
                        content
                    });
                } else {
                    return ({
                        value: option.value,
                        content: [option.icon, option.text]
                    });
                }
            })
        );
    }

    renderButtonContent() {
        let checkedItems = this.props.options.filter(option => this.state.checkedItems.indexOf(option.value) !== -1);

        return checkedItems.map(item => item.text).join(', ') || this.props.text || '--------';
    }

    updatePopupMenuStyles() {
        let button = ReactDOM.findDOMNode(this._button);
        let buttonWidth = button.getBoundingClientRect().width;
        let popupMenuStyles = {};

        if (this.props.width === 'available') {
            popupMenuStyles = `minWidth: ${buttonWidth}; maxWidth: ${buttonWidth}`;
        } else {
            popupMenuStyles = `minWidth: ${buttonWidth}`;
        }

        this.setState({
            popupMenuStyles
        });
    }

    handleButtonClick() {
        let newOpenedState = this.props.opened !== undefined ? !this.props.opened : !this.state.opened;

        this.setState({
            opened: newOpenedState
        });

        if (this.props.onClick) {
            this.props.onClick();
        }
    }

    handleOptionCheck(e, checkedValue) {
        let isCheckedMode = this.props.mode === 'check';
        let checkedItems = this.state.checkedItems;

        if (isCheckedMode) {
            if (this.state.checkedItems.indexOf(checkedValue) !== -1) {
                checkedItems = checkedItems.filter(i => i !== checkedValue);
            } else {
                checkedItems.push(checkedValue);
            }
        } else {
            checkedItems = [ checkedValue ];
        }

        this.setState({
            checkedItems,
            opened: this.props.mode === 'check'
        });

        if (this.props.mode !== 'check') {
            ReactDOM.findDOMNode(this._button).focus();
        }

        if (this.props.onOptionCheck) {
            this.props.onOptionCheck(checkedItems);
        }
    }

    handleClickOutside() {
        this.setState({
            opened: false
        });

        if (this.props.onClickOutside) {
            this.props.onClickOutside();
        }
    }

    handleKeyDown(e) {
        // TODO
    }
};
