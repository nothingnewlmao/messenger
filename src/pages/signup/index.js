import compileTemplate from "../../utils/compileTemplate";
import template from "../../layouts/unauth/index.tpml";

const data = {
    form_title: 'Регистрация',
    fields: [
        {
            field_name: 'email',
            label: 'Почта'
        },
        {
            field_name: 'login',
            label: 'Логин'
        },
        {
            field_name: 'first_name',
            label: 'Имя'
        },
        {
            field_name: 'second_name',
            label: 'Фамилия'
        },
        {
            field_name: 'phone',
            label: 'Телефон'
        },
        {
            field_name: 'password',
            label: 'Пароль'
        },
        {
            field_name: 'submit_password',
            label: 'Пароль (ещё раз)'
        },
    ],
    submit_btn: {
        text: 'Зарегистрироваться',
        onClick: '/signup'
    },
    alt_btn: {
        text: 'Войти',
        onClick: '/login'
    }
};

compileTemplate(template, data, '#root');
