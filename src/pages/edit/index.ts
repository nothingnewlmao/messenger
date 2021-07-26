import tmpl from '../../layouts/profile/index.tmpl';
import renderTemplate from '../../utils/renderTemplate';
import inputs from '../userData';

const renderInputs = Object.fromEntries(Object.entries({...inputs})
    .map(([key, value]) => [key, {...value, readonly: false}]));

const controls = [
    {
        label: 'Сохранить',
    },
];
const renderData = {inputs: renderInputs, controls};

renderTemplate(tmpl, renderData, '#root');
