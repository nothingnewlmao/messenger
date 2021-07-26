import renderTemplate from '../../utils/renderTemplate';
import template from '../../layouts/unauth/index.tpml';

const data = {
    formTitle: 'Регистрация',
    fields: [
        {
            fieldName: 'email',
            label: 'Почта',
        },
        {
            fieldName: 'login',
            label: 'Логин',
        },
        {
            fieldName: 'firstName',
            label: 'Имя',
        },
        {
            fieldName: 'secondName',
            label: 'Фамилия',
        },
        {
            fieldName: 'phone',
            label: 'Телефон',
        },
        {
            fieldName: 'password',
            label: 'Пароль',
        },
        {
            fieldName: 'submitPassword',
            label: 'Пароль (ещё раз)',
        },
    ],
    submitBtn: {
        text: 'Зарегистрироваться',
        onClick: '/signup',
    },
    altBtn: {
        text: 'Войти',
        onClick: '/login',
    },
};

renderTemplate(template, data, '#root');
