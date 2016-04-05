var React = require('react');
var provide = require('../../provide');

require('bem-loader!./menu.css');
export class Menu extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            val: null,
            hovered: null,
        };
    }

    render() {
        return provide({
            block: 'menu',
            val: this.state.value,
            content: this.props.items.map(i => {
                if (Array.isArray(i.content)) {
                    return {
                        elem: 'group',
                        content: i.content.map((a) => {
                            return {
                                block: 'menu-item',
                                val: a.val,
                                content: a.content,
                                mods: { hovered: this.state.hovered === a.val },
                                // FIXME - do not duplicate handlers
                                attrs: {
                                    onClick: () => {
                                        this.setState({
                                            value: a.val
                                        });
                                    },
                                    onMouseEnter: () => {
                                        this.setState({
                                            hovered: a.val
                                        });
                                    },
                                    onMouseLeave: () => {
                                        this.setState({
                                            hovered: null
                                        })
                                    }
                                }
                            };
                        })
                    };
                }

                return {
                    block: 'menu-item',
                    val: i.val,
                    content: i.content,
                    mods: { hovered: this.state.hovered === i.val },
                    attrs: {
                        // FIXME - do not duplicate handlers
                        onClick: () => {
                             this.setState({
                                value: i.val
                             });
                        },
                        onMouseEnter: () => {
                            this.setState({
                                hovered: i.val
                            });
                        },
                        onMouseLeave: () => {
                            this.setState({
                                hovered: null
                            })
                        }
                    }
                };
            }),
            mods : {
                size: this.props.size,
                theme: this.props.theme
            }
        });
    }
}
