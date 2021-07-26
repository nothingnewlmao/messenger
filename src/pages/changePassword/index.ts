import tmpl from '../../layouts/profile/index.tmpl';
import renderTemplate from '../../utils/renderTemplate';

const renderInputs = {
    oldPassword: {
        label: 'Старый пароль',
        value: '',
        name: 'oldPassword',
        type: 'password',
    },
    newPassword: {
        label: 'Новый пароль',
        value: '',
        name: 'newPassword',
        type: 'password',
    },
    submitPassword: {
        label: 'Повторите новый пароль',
        value: '',
        name: 'submitPassword',
        type: 'password',
    },
};

const controls = [
    {
        label: 'Сохранить',
    },
];
const renderData = {
    inputs: renderInputs,
    controls,
};

renderTemplate(tmpl, renderData, '#root');
