import renderPage from '../../utils/renderPage';
import UnauthPageLayout from '../../layouts/unauth/UnauthPageLayout';

const ctx = {
    formTitle: 'Регистрация',
    fields: [
        {
            name: 'email',
            label: 'Почта',
        },
        {
            name: 'login',
            label: 'Логин',
        },
        {
            name: 'firstName',
            label: 'Имя',
        },
        {
            name: 'secondName',
            label: 'Фамилия',
        },
        {
            name: 'phone',
            label: 'Телефон',
        },
        {
            name: 'password',
            label: 'Пароль',
        },
        {
            name: 'submitPassword',
            label: 'Пароль (ещё раз)',
        },
    ],
    submitBtn: {
        label: 'Зарегистрироваться',
    },
    altBtn: {
        label: 'Войти',
    },
};

const signUpPage = new UnauthPageLayout(ctx);
renderPage(signUpPage);
