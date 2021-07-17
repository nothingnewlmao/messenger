import tmpl from '../../layouts/profile/index.tmpl';
import renderTemplate from "../../utils/renderTemplate";

const render_inputs = {
    old_password: {
        label: 'Старый пароль',
        value: '',
        name: 'old_password',
        type: 'password',
    },
    new_password: {
        label: 'Новый пароль',
        value: '',
        name: 'new_password',
        type: 'password',
    },
    submit_password: {
        label: 'Повторите новый пароль',
        value: '',
        name: 'submit_password',
        type: 'password',
    }
};

const controls = [
    {
        label: 'Сохранить'
    }
];
const render_data = { inputs: render_inputs, controls };

renderTemplate(tmpl, render_data, '#root');
