import UnauthPageLayout from '../../layouts/unauth/UnauthPageLayout';
import renderPage from '../../utils/renderHelpers/renderPage';
import Button from '../../components/button';
import FormInput from '../../components/formInput';
import Form from '../../components/form';
// import formHandler from '../../utils/eventHanlers/formHandler';

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
                        // click: formHandler,
                    },
                }),
            },
        }),
        // altBtn: new Button({
        //     label: 'Нет аккаунта?',
        //     className: '_flat',
        // }),
    },
};

const loginPage = new UnauthPageLayout(ctx);
console.log(loginPage);
renderPage(loginPage);
