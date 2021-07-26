import renderTemplate from '../../utils/renderTemplate';
import template from '../../layouts/unauth/index.tpml';

const data = {
    formTitle: 'Вход',
    fields: [
        {
            fieldName: 'login',
            label: 'Логин',
        },
        {
            fieldName: 'password',
            label: 'Пароль',
        },
    ],
    submitBtn: {
        text: 'Авторизоваться',
        onClick: '/login',
    },
    altBtn: {
        text: 'Нет аккаунта?',
        onClick: '/signup',
    },
};

renderTemplate(template, data, '#root');
