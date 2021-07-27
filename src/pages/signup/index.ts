import renderTemplate from '../../utils/renderTemplate';
import template from '../../layouts/unauth/index.tpml';
import UnauthPageType from '../../layouts/unauth/unauthPageType';

const data: UnauthPageType = {
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

renderTemplate(template, data, '#root');
