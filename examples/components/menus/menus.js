const React = require('react');

const Menu = require('../../../src').Menu;
const MenuItem = require('../../../src').MenuItem;
require('bem-loader!../../design/menu/menu.css');
require('bem-loader!../../design/menu-item/menu-item.css');

module.exports = class Menus extends React.Component {

    render() {
        return (
            <div className='menus'>
                <h2>Menus</h2>

                <Menu theme='islands' size='m'>
                    <MenuItem theme='islands' size='m' val={1}>
                        text 1
                    </MenuItem>
                    <MenuItem theme='islands' size='m' val={2}>
                        text 2
                    </MenuItem>
                    <Menu.Group title='group'>
                        <MenuItem theme='islands' size='m' val={1}>
                            text 3
                        </MenuItem>
                        <MenuItem theme='islands' size='m' val={2}>
                            text 4
                        </MenuItem>
                    </Menu.Group>
                </Menu>
            </div>
        );
    }
}
