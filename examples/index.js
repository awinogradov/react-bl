const React = require('react');
const ReactDom = require('react-dom');

const Buttons = require('./components/buttons/buttons');
const Checkboxes = require('./components/checkboxes/checkboxes');
const Links = require('./components/links/links');
const Progressbars = require('./components/progressbars/progressbars');
const Spins = require('./components/spins/spins');
const Icons = require('./components/icons/icons');
const Images = require('./components/images/images');

ReactDom.render(
    <main className='main'>
        <Buttons />
        <Checkboxes />
        <Links />
        <Progressbars />
        <Spins />
        <Icons />
        <Images />
    </main>,
    document.getElementById('root')
);

// TODO: refactor next like ./components/buttons

// import { Input } from './react-components/input/input';
// import { Textarea } from './react-components/textarea/textarea';
// import { Select } from './react-components/select/select';
// import { CheckboxGroup } from './react-components/checkbox-group/checkbox-group';
// import { Radio } from './react-components/radio/radio';
// import { RadioGroup } from './react-components/radio-group/radio-group';
// import { Menu } from './react-components/menu/menu';
// import { Attach } from './react-components/attach/attach';
// import { Dropdown } from './react-components/dropdown/dropdown';

// ReactDom.render(
//     <main className='main'>
//         <br/>
//         <h2>Input</h2>
//
//         <Input theme='islands' size='s' val='Size S' />
//         <Input theme='islands' size='s' val='Size S' disabled={true} />
//         &nbsp;
//         <br/>
//         <Input theme='islands' size='m' val='Size M' />
//         &nbsp;
//         <Input theme='islands' size='m' val='Size M' disabled={true} />
//         <br/>
//         <Input theme='islands' size='l' val='Size L' />
//         &nbsp;
//         <Input theme='islands' size='l' val='Size L' disabled={true} />
//         <br/>
//         <Input theme='islands' size='xl' val='Size XL' />
//         &nbsp;
//         <Input theme='islands' size='xl' val='Size XL' disabled={true} />
//         <br/>
//         <Input theme='islands' size='xl' val='Size XL' hasClear={true} />
//
//         <br/>
//         <h2>Textarea</h2>
//
//         <Textarea theme='islands' size='s' val='Size S' />
//         &nbsp;
//         <Textarea theme='islands' size='s' val='Size S' disabled={true} />
//         <br/>
//         <Textarea theme='islands' size='m' val='Size M' />
//         &nbsp;
//         <Textarea theme='islands' size='m' val='Size M' disabled={true} />
//         <br/>
//         <Textarea theme='islands' size='l' val='Size L' />
//         &nbsp;
//         <Textarea theme='islands' size='l' val='Size L' disabled={true} />
//         <br/>
//         <Textarea theme='islands' size='xl' val='Size XL' />
//         &nbsp;
//         <Textarea theme='islands' size='xl' val='Size XL' disabled={true} />
//
//         <br/>
//         <h2>Checkbox-Group</h2>
//
//         <CheckboxGroup theme='islands' size='m' options={[{ val: 1, text: 'option 1' }, { val: 2, text: 'option 2', disabled: true }]} val={[1]} />
//         &nbsp;
//         <CheckboxGroup theme='islands' size='l' options={[{ val: 1, text: 'option 1' }, { val: 2, text: 'option 2', disabled: true }]} val={[1]} />
//
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
//
//         <br/>
//
//         <br/>
//         <h2>Radio</h2>
//
//         <Radio theme='islands' size='m' text='Size M' />
//         <Radio theme='islands' size='l' text='Size L' />
//         <br/>
//         <Radio theme='islands' type='button' size='m' text='Size M' />
//         <Radio theme='islands' type='button' size='l' text='Size L' />
//
//         <br/>
//         <h2>Radio-Group</h2>
//         <RadioGroup
//             theme='islands'
//             size='m'
//             options={[
//                 { val: 1, text: 'Футбол' },
//                 { val: 2, text: 'Баскетбол' },
//                 { val: 3, text: 'Гандбол' }
//             ]}
//             val={[1]} />
//
//         <br/>
//         <h2>Menu</h2>
//
//         <Menu theme='islands' size='l' items={[
//             { content: 'item 1', val: 1},
//             { content: [
//                 { content: 'item 2', val: 2 },
//                 { content: 'item 3', val: 3 },
//             ]},
//             { content: 'item 4', val: 4 }
//         ]}/>
//
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
//         <br/>
//         <h2>Dropdown</h2>
//
//         <Dropdown theme='islands' size='m' type='link' switcher='olololo' popup='one' />
//         &nbsp;
//         <Dropdown theme='islands' size='m' type='button' switcher='olololo' popup='one' />
//
//     </main>,
//     document.getElementById('root')
// );
