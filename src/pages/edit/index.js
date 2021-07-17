import tmpl from '../../layouts/profile/index.tmpl';
import compileTemplate from "../../utils/compileTemplate";
import inputs from '../userData';

const render_inputs = Object.fromEntries(Object.entries({ ...inputs})
    .map(([key, value]) => [key, { ...value, readonly: false }]));

const controls = [
    {
        label: 'Сохранить'
    }
];
const render_data = { inputs: render_inputs, controls };

compileTemplate(tmpl, render_data, '#root');
