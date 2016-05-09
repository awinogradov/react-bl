const React = require('react');
const ReactDOM = require('react-dom');

const Popup = require('../../../src').Popup;
require('bem-loader!../../design/popup/popup.css');
require('./popups.styl');
const Link = require('../../../src/').Link;

const DIRECTIONS = [
    'bottom-left', 'bottom-center', 'bottom-right',
    'top-left', 'top-center', 'top-right',
    'right-top', 'right-center', 'right-bottom',
    'left-top', 'left-center', 'left-bottom',
];

const POPUPS = DIRECTIONS.map(d => ({ directions: [d], id: d, }));
POPUPS.push({
    directions: null,
    id: 'popup-at-50x50',
    position: {
        top: 50,
        left: 50,
    },
});

module.exports = class Popups extends React.Component {

    constructor(props) {
        super(props);

        this.state = POPUPS.reduce((acc, cur) => {
            acc[cur.id] = false;
            return acc;
        }, {});
    }

    componentDidMount() {
        POPUPS.forEach(p => {
            if (p.directions) {
                this.refs[p.id].setTarget(ReactDOM.findDOMNode(this.refs['target_' + p.id]));
            } else if(p.position) {
                this.refs[p.id].setPosition(p.position.top, p.position.left);
            }
        });
    }

    renderPopupWithTarget(id, directions, isAutoclosable=false) {
        return (<div className="test">
            <Link pseudo={ true }
                ref={ 'target_' + id }
                theme='islands'
                size='xl'
                onClick={ () => { this.setState({ [id]: !this.state[id] }); } }
            >
                { id }
            </Link>
            <Popup
                autoclosable={isAutoclosable}
                onClickOutside={ isAutoclosable
                    ? () => { this.setState({ [id]: false }); }
                    : () => {}
                }
                className='test-popup'
                ref={ id }
                directions={ directions }
                theme='islands'
                visible={ this.state[id] }
                size='s'
            >
                { id }
            </Popup>
        </div>);
    }

    render() {
        return (
            <div className='popups'>
                <h2>Popups</h2>
                <table className="directions">
                    <tr className="directions__row">
                        <td className="directions__cell"></td>
                        <td className="directions__cell directions__cell_align_left">
                            { this.renderPopupWithTarget('top-left', ['top-left']) }
                        </td>
                        <td className="directions__cell directions__cell_align_center">
                            { this.renderPopupWithTarget('top-center', ['top-center'], true) }
                        </td>
                        <td className="directions__cell directions__cell_align_right">
                            { this.renderPopupWithTarget('top-right', ['top-right']) }
                        </td>
                        <td className="directions__cell"></td>
                    </tr>
                    <tr className="directions__row">
                        <td className="directions__cell directions__cell_align_right">
                            { this.renderPopupWithTarget('left-top', ['left-top']) }
                        </td>
                        <td className="directions__cell directions__cell_align_center directions__cell_border_yes" colSpan="3" rowSpan="3">
                            { this.renderPopupWithTarget('popup-at-50x50', null) }
                        </td>
                        <td className="directions__cell directions__cell_align_left">
                            { this.renderPopupWithTarget('right-top', ['right-top']) }
                        </td>
                    </tr>
                    <tr className="directions__row">
                        <td className="directions__cell directions__cell_align_right">
                            { this.renderPopupWithTarget('left-center', ['left-center']) }
                        </td>
                        <td className="directions__cell directions__cell_align_left">
                            { this.renderPopupWithTarget('right-center', ['right-center']) }
                        </td>
                    </tr>
                    <tr className="directions__row">
                        <td className="directions__cell directions__cell_align_right">
                            { this.renderPopupWithTarget('left-bottom', ['left-bottom']) }
                        </td>
                        <td className="directions__cell directions__cell_align_left">
                            { this.renderPopupWithTarget('right-bottom', ['right-bottom']) }
                        </td>
                    </tr>
                    <tr className="directions__row">
                        <td className="directions__cell"></td>
                        <td className="directions__cell directions__cell_align_left">
                            { this.renderPopupWithTarget('bottom-left', ['bottom-left']) }
                        </td>
                        <td className="directions__cell directions__cell_align_center">
                            { this.renderPopupWithTarget('bottom-center', ['bottom-center']) }
                        </td>
                        <td className="directions__cell directions__cell_align_right">
                            { this.renderPopupWithTarget('bottom-right', ['bottom-right']) }
                        </td><
                        td className="directions__cell"></td>
                    </tr>
                </table>
            </div>
        );
    }
}
