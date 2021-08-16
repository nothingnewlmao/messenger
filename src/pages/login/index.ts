import UnauthPageLayout from '../../layouts/unauth/UnauthPageLayout';
import Button from '../../components/button';
import FormInput from '../../components/formInput';
import Form from '../../components/form';
import router from '../../router';

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
                    }, {
                        blur: [
                            'loginCheck',
                            'requiredField',
                        ],
                        'form-submitted': [
                            'loginCheck',
                            'requiredField',
                        ],
                    }),
                    new FormInput({
                        label: 'Пароль',
                        name: 'password',
                        type: 'password',
                        className: 'unauth-input',
                    }, {
                        blur: ['requiredField'],
                        'form-submitted': ['requiredField'],
                    }),
                ],
                submitBtn: new Button({
                    label: 'Авторизоваться',
                    type: 'submit',
                }),
            },
        }, {
            click: [
                'emitSubmitEvent',
                'collectFields',
            ],
        }),
        altBtn: new Button({
            label: 'Зарегистрироваться',
            className: '_flat',
        }, {
            click: () => {
                router.go('signup');
            },
        }),
    },
};

const loginPage = new UnauthPageLayout(ctx);
export default loginPage;
