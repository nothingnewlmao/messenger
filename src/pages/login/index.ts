import UnauthPageLayout from '../../layouts/unauth/UnauthPageLayout';
import renderPage from '../../utils/renderPage';
import Button from '../../components/button';
import FormInput from '../../components/formInput';
import Form from '../../components/form';
import {
    formHandlers,
    emitInputsValidation,
} from '../../utils/formHandlers';

const submitBtnClick = event => {
    emitInputsValidation(event);
    formHandlers(event);
};

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
                    events: {
                        click: submitBtnClick,
                    },
                }),
            },
        }),
        altBtn: new Button({
            label: 'Нет аккаунта?',
            className: '_flat',
        }),
    },
};

const loginPage = new UnauthPageLayout(ctx);
renderPage(loginPage);
