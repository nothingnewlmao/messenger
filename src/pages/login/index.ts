import UnauthPageLayout from '../../layouts/unauth/UnauthPageLayout';
import renderPage from '../../utils/renderHelpers/renderPage';
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
                        className: 'unauth-input',
                    }),
                    new FormInput({
                        label: 'Пароль',
                        name: 'password',
                        type: 'password',
                        className: 'unauth-input',
                    }),
                ],
                submitBtn: new Button({
                    label: 'Авторизоваться',
                    type: 'submit',
                }),
            },
        }),
    },
};

const loginPage = new UnauthPageLayout(ctx);
renderPage(loginPage);
