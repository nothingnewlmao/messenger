import UnauthPageLayout from '../../layouts/unauth/UnauthPageLayout';
import renderPage from '../../utils/renderPage';
import Button from '../../components/button';
import FormInput from '../../components/formInput';
import Form from '../../components/form';

const ctx = {
    formTitle: 'Вход',
    children: {
        form: new Form({
            children: {
                inputs: [
                    new FormInput({
                        label: 'Логин',
                        name: 'login',
                        class: 'unauth-input',
                    }),
                    new FormInput({
                        label: 'Пароль',
                        name: 'password',
                        type: 'password',
                        class: 'unauth-input',
                    }),
                ],
                submitBtn: new Button({
                    label: 'Авторизоваться',
                }),
            },
        }),
        altBtn: new Button({
            label: 'Нет аккаунта?',
            class: '_flat',
        }),
    },
};

const loginPage = new UnauthPageLayout(ctx);
renderPage(loginPage);
