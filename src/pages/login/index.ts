import renderTemplate from '../../utils/renderTemplate';
import template from '../../layouts/unauth/index.tpml';
import UnauthPageType from '../../layouts/unauth/unauthPageType';

const data: UnauthPageType = {
    formTitle: 'Вход',
    fields: [
        {
            name: 'login',
            label: 'Логин',
        },
        {
            name: 'password',
            label: 'Пароль',
        },
    ],
    submitBtn: {
        label: 'Авторизоваться',
    },
    altBtn: {
        label: 'Нет аккаунта?',
    },
    msg: {
        date: new Date(),
        content: '32432423',
    },
};

renderTemplate(template, data, '#root');
