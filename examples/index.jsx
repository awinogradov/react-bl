const React = require('react');
const ReactDOM = require('react-dom');

const Buttons = require('./components/buttons/buttons');
const Checkboxes = require('./components/checkboxes/checkboxes');
const CheckboxGroups = require('./components/checkbox-groups/checkbox-groups');
const Dropdowns = require('./components/dropdowns/dropdowns');
const Icons = require('./components/icons/icons.jsx');
const Images = require('./components/images/images');
const Inputs = require('./components/inputs/inputs');
const Links = require('./components/links/links');
const Menus = require('./components/menus/menus');
const Progressbars = require('./components/progressbars/progressbars');
const RadioGroups = require('./components/radio-groups/radio-groups');
const Radios = require('./components/radios/radios');
const Spins = require('./components/spins/spins');
const Textareas = require('./components/textareas/textareas');
const Popups = require('./components/popups/popups.jsx');
const Selects = require('./components/selects/selects.jsx');

ReactDOM.render(
    <main className='main'>
        <Buttons />
        <Checkboxes />
        <CheckboxGroups />
        <Dropdowns />
        <Icons />
        <Images />
        <Inputs />
        <Links />
        <Menus />
        <Progressbars />
        <RadioGroups />
        <Radios />
        <Spins />
        <Textareas />
        <Popups />
        <Selects />
    </main>,
    document.getElementById('root')
);

// TODO: refactor next like ./components/buttons

// import { Select } from './react-components/select/select';
// import { Attach } from './react-components/attach/attach';

// ReactDom.render(
//     <main className='main'>/
//         <br/>
//         <h2>Select</h2>
//
//         <Select theme='islands' size='s' mode='check' text='Select S' options={[{ val: 1, text: 'option' }]} val={[1]} />
//         &nbsp;
//         <Select theme='islands' size='m' mode='check' text='Select M' options={[{ val: 1, text: 'option' }]} val={[1]} />
//         &nbsp;
//         <Select theme='islands' size='l' mode='check' text='Select L' options={[{ val: 1, text: 'option' }]} val={[1]} />
//         &nbsp;
//         <Select theme='islands' size='xl' mode='check' text='Select XL' options={[{ val: 1, text: 'option' }]} val={[1]} />
//         <br/>
//         <Select theme='islands' size='s' mode='radio-check' text='Select S' options={[{ val: 1, text: 'option' }]} val={[1]} />
//         &nbsp;
//         <Select theme='islands' size='m' mode='radio-check' text='Select M' options={[{ val: 1, text: 'option' }]} val={[1]} />
//         &nbsp;
//         <Select theme='islands' size='l' mode='radio-check' text='Select L' options={[{ val: 1, text: 'option' }]} val={[1]} />
//         &nbsp;
//         <Select theme='islands' size='xl' mode='radio-check' text='Select XL' options={[{ val: 1, text: 'option' }]} val={[1]} />

//         <br/>
//         <h2>Attach</h2>
//
//         <Attach theme='islands' size='s' button='Size S' />
//         &nbsp;
//         <Attach theme='islands' size='s' button='Size S' disabled={true} />
//         <br/>
//         <Attach theme='islands' size='m' button='Size M' />
//         &nbsp;
//         <Attach theme='islands' size='m' button='Size M' disabled={true} />
//         <br/>
//         <Attach theme='islands' size='l' button='Size L' />
//         &nbsp;
//         <Attach theme='islands' size='l' button='Size L' disabled={true} />
//         <br/>
//         <Attach theme='islands' size='xl' button='Size XL' />
//         &nbsp;
//         <Attach theme='islands' size='xl' button='Size XL' disabled={true} />
//         &nbsp;
//         <Attach
//             theme='islands'
//             size='m'
//             button='Size M'
//             name='name-attach'
//             noFileText='Нет файла? Есть BEM-XJST!!!'/>
//
//     </main>,
//     document.getElementById('root')
// );
