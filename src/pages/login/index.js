import '../../styles/colors.scss';
import '../../index.scss';
import compileTemplate from "../../utils/compileTemplate";
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

compileTemplate(template, data, '#root');
