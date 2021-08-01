import UnauthPageLayout from '../../layouts/unauth/UnauthPageLayout';
import renderPage from '../../utils/renderPage';
import Button from '../../components/button';
import FormInput from '../../components/formInput';

const ctx = {
    formTitle: 'Вход',
    children: {
        fields: [
            new FormInput({
                name: 'login',
                label: 'Логин',
            }),
            new FormInput({
                name: 'password',
                label: 'Пароль',
                type: 'password',
            }),
        ],
        submitBtn: new Button({
            label: 'Авторизоваться',
        }),
        altBtn: new Button({
            label: 'Нет аккаунта?',
        }),
    },
};

const loginPage = new UnauthPageLayout(ctx);
renderPage(loginPage);
