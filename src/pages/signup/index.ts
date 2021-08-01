import UnauthPageLayout from '../../layouts/unauth/UnauthPageLayout';
import renderPage from '../../utils/renderPage';
import Button from '../../components/button';
import FormInput from '../../components/formInput';
import Form from '../../components/form';

const ctx = {
    formTitle: 'Регистрация',
    children: {
        form: new Form({
            children: {
                inputs: [
                    new FormInput({
                        name: 'email',
                        label: 'Почта',
                        class: 'unauth-input',
                    }),
                    new FormInput({
                        label: 'Пароль',
                        name: 'password',
                        type: 'password',
                        class: 'unauth-input',
                    }),
                    new FormInput({
                        name: 'firstName',
                        label: 'Имя',
                        class: 'unauth-input',
                    }),
                    new FormInput({
                        name: 'secondName',
                        label: 'Фамилия',
                        class: 'unauth-input',
                    }),
                    new FormInput({
                        name: 'phone',
                        label: 'Телефон',
                        class: 'unauth-input',
                    }),
                    new FormInput({
                        name: 'password',
                        label: 'Пароль',
                        class: 'unauth-input',
                    }),
                    new FormInput({
                        name: 'submitPassword',
                        label: 'Пароль (ещё раз)',
                        class: 'unauth-input',
                    }),
                ],
                submitBtn: new Button({
                    label: 'Зарегистрироваться',
                }),
            },
        }),
        altBtn: new Button({
            label: 'Войти',
            class: '_flat',
        }),
    },
};

const signupPage = new UnauthPageLayout(ctx);
renderPage(signupPage);
