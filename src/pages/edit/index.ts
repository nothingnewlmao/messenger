import tmpl from '../../layouts/profile/index.tmpl';
import renderTemplate from '../../utils/renderTemplate';
import inputs from '../userData';
import ProfileInputType from '../../layouts/profile/ProfileInputType';

const renderInputs = Object.fromEntries(Object.entries({...inputs})
    .map(([key, value]) => [key, {...value, readonly: false}]));

const controls = [
    {
        label: 'Сохранить',
    },
];
const renderData: ProfileInputType = {inputs: renderInputs, controls};

renderTemplate(tmpl, renderData, '#root');
