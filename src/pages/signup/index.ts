import UnauthPageLayout from '../../layouts/unauth/UnauthPageLayout';
import renderPage from '../../utils/renderHelpers/renderPage';
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
                        name: 'firstName',
                        label: 'Имя',
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
                        name: 'secondName',
                        label: 'Фамилия',
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
                        name: 'phone',
                        label: 'Телефон',
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
                        name: 'password',
                        label: 'Пароль',
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
                        name: 'submitPassword',
                        label: 'Пароль (ещё раз)',
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
                ],
                submitBtn: new Button({
                    label: 'Зарегистрироваться',
                }),
            },
        }, {
            click: [
                'emitSubmitEvent',
                'collectFields',
            ],
        }),
        altBtn: new Button({
            label: 'Войти',
            className: '_flat ',
        }),
    },
};

const signupPage = new UnauthPageLayout(ctx);
renderPage(signupPage);
