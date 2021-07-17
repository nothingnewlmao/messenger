import renderTemplate from "../../utils/renderTemplate";
import template from "../../layouts/unauth/index.tpml";

const data = {
    form_title: 'Вход',
    fields: [
        {
            field_name: 'login',
            label: 'Логин'
        },
        {
            field_name: 'password',
            label: 'Пароль'
        }
    ],
    submit_btn: {
        text: 'Авторизоваться',
        onClick: '/login'
    },
    alt_btn: {
        text: 'Нет аккаунта?',
        onClick: '/signup'
    }
};

renderTemplate(template, data, '#root');
