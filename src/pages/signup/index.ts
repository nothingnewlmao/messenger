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
                            'requiredField',
                            'emailCheck',
                        ],
                        'form-submitted': [
                            'requiredField',
                            'emailCheck',
                        ],
                    }),
                    new FormInput({
                        label: 'Пароль',
                        name: 'password',
                        type: 'password',
                        className: 'unauth-input',
                    }, {
                        blur: [
                            'requiredField',
                            'loginCheck',
                        ],
                        'form-submitted': [
                            'requiredField',
                            'loginCheck',
                        ],
                    }),
                    new FormInput({
                        name: 'firstName',
                        label: 'Имя',
                        className: 'unauth-input',
                    }, {
                        blur: [
                            'requiredField',
                            'onlyLetters',
                        ],
                        'form-submitted': [
                            'requiredField',
                            'onlyLetters',
                        ],
                    }),
                    new FormInput({
                        name: 'secondName',
                        label: 'Фамилия',
                        className: 'unauth-input',
                    }, {
                        blur: [
                            'requiredField',
                            'onlyLetters',
                        ],
                        'form-submitted': [
                            'requiredField',
                            'onlyLetters',
                        ],
                    }),
                    new FormInput({
                        name: 'phone',
                        label: 'Телефон',
                        className: 'unauth-input',
                    }, {
                        blur: [
                            'requiredField',
                            'phoneCheck',
                        ],
                        'form-submitted': [
                            'requiredField',
                            'phoneCheck',
                        ],
                    }),
                    new FormInput({
                        name: 'password',
                        label: 'Пароль',
                        className: 'unauth-input',
                    }, {
                        blur: [
                            'requiredField',
                        ],
                        'form-submitted': [
                            'requiredField',
                        ],
                    }),
                    new FormInput({
                        name: 'submitPassword',
                        label: 'Пароль (ещё раз)',
                        className: 'unauth-input',
                    }, {
                        blur: [
                            'requiredField',
                        ],
                        'form-submitted': [
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
        }, {
            click: () => {
                window.location = '/login/index.html';
            },
        }),
    },
};

const signupPage = new UnauthPageLayout(ctx);
renderPage(signupPage);
