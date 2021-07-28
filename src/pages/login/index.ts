import UnauthPage from '../../layouts/unauth/UnauthPage';
import renderPage from '../../utils/renderPage';

const ctx = {
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

const loginPage = new UnauthPage(ctx);
renderPage(loginPage);
