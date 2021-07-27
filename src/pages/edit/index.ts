import tmpl from '../../layouts/profile/index.tmpl';
import renderTemplate from '../../utils/renderTemplate';
import inputs from '../userData';
import ProfilePageType from '../../layouts/profile/profilePageType';
const renderInputs = Object.fromEntries(Object.entries({...inputs})
    .map(([key, value]) => [key, {...value, readonly: false}]));

const controls = [
    {
        label: 'Сохранить',
    },
];
const renderData: ProfilePageType = {inputs: renderInputs, controls};

renderTemplate(tmpl, renderData, '#root');
