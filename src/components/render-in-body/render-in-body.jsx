import ReactDOM from 'react-dom';
import React from 'react';

module.exports = class RenderInBody extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.onRender = this.onRender.bind(this);
    }

    getElement() {
        return this.el;
    }

    componentDidMount() {
        this.el = document.createElement('div');
        document.body.appendChild(this.el);
        this.renderLayer();
    }

    componentDidUpdate() {
        this.renderLayer();
    }

    componentWillUnmount() {
        ReactDOM.unmountComponentAtNode(this.el);
        document.body.removeChild(this.el);
    }

    renderLayer() {
        if (this.props.className) {
            this.el.className = this.props.className.toString();
        }

        ReactDOM.unstable_renderSubtreeIntoContainer(
            this,
            this.props.children,
            this.el,
            this.onRender
        );
    }

    render() {
        // Render a placeholder
        return <div/>;
    }

    onRender() {
        if (this.props.onRender) {
            this.props.onRender();
        }
    }
}
