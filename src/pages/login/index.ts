import UnauthPageLayout from '../../layouts/unauth/UnauthPageLayout';
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
            type: 'password',
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

const loginPage = new UnauthPageLayout(ctx);
renderPage(loginPage);
