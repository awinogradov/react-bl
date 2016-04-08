const React = require('react');
const ReactDom = require('react-dom');

const Buttons = require('./components/buttons/buttons');
const Links = require('./components/links/links');

ReactDom.render(
    <main className='main'>
        <Buttons />
        <Links />
    </main>,
    document.getElementById('root')
);

// TODO: refactor next like ./components/buttons


// import { Spin } from './react-components/spin/spin';
// import { Input } from './react-components/input/input';
// import { Textarea } from './react-components/textarea/textarea';
// import { Select } from './react-components/select/select';
// import { Link } from './react-components/link/link';
// import { Checkbox } from './react-components/checkbox/checkbox';
// import { CheckboxGroup } from './react-components/checkbox-group/checkbox-group';
// import { Radio } from './react-components/radio/radio';
// import { RadioGroup } from './react-components/radio-group/radio-group';
// import { Image } from './react-components/image/image';
// import { Menu } from './react-components/menu/menu';
// import { Attach } from './react-components/attach/attach';
// import { Progressbar } from './react-components/progressbar/progressbar';
// import { Dropdown } from './react-components/dropdown/dropdown';
// import { Icon } from './react-components/icon/icon';

// ReactDom.render(
//     <main className='main'>
//         <h2>Spin</h2>
//
//         <Spin theme='islands' size='s' visible={true} />
//         <Spin theme='islands' size='m' visible={true} />
//         <Spin theme='islands' size='l' visible={true} />
//         <Spin theme='islands' size='xl' visible={true} />
//
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
//         <h2>Checkbox</h2>
//
//         <Checkbox theme='islands' size='m' text='Size M' />
//         &nbsp;
//         <Checkbox theme='islands' size='m' text='Size M' checked={true} />
//         &nbsp;
//         <Checkbox theme='islands' size='m' text='Size M' disabled={true} />
//         &nbsp;
//         <Checkbox theme='islands' size='m' text='Size M' type='button' />
//         <br/>
//         <Checkbox theme='islands' size='l' text='Size L' />
//         &nbsp;
//         <Checkbox theme='islands' size='l' text='Size L' checked={true} />
//         &nbsp;
//         <Checkbox theme='islands' size='l' text='Size M' disabled={true} />
//         &nbsp;
//         <Checkbox theme='islands' size='l' text='Size L' type='button' />
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
//         <br/>
//         <h2>Image</h2>
//
//         <Image
//             url='https://img-fotki.yandex.ru/get/16159/259818507.0/0_130be6_4116d8e7_S'
//             title= 'Все подробности на bem.info'/>
//         &nbsp;
//         <Image
//             url='https://img-fotki.yandex.ru/get/16159/259818507.0/0_130be6_4116d8e7_S'
//             title= 'Все подробности на bem.info'
//             width='200px'
//             height='100px'/>
//         &nbsp;
//         <Image>
//             <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16"><path d="M13.5.5l-8 12L1.7 8l-1 1.6L5.6 15l9.1-13.4z"/></svg>
//         </Image>
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
//         <h2>Progressbar</h2>
//
//         <Progressbar theme='islands' val={'49'} />
//
//         <br/>
//         <h2>Dropdown</h2>
//
//         <Dropdown theme='islands' size='m' type='link' switcher='olololo' popup='one' />
//         &nbsp;
//         <Dropdown theme='islands' size='m' type='button' switcher='olololo' popup='one' />
//
//         <br/>
//         <h2>Icon</h2>
//
//         <Icon url='https://img-fotki.yandex.ru/get/5405/259818507.0/0_130be5_948d59aa_S' />
//         &nbsp;
//         <Icon><svg className="action_type_download" xmlns="..." width="16" height="16"><path d="M1 13v2h14v-2h-14zm13-7h-3v-5h-6v5.031l-3-.031 6 6 6-6z"/></svg></Icon>
//     </main>,
//     document.getElementById('root')
// );
