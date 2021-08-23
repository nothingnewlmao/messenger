import Button from '../../components/button';
import FormInput from '../../components/formInput';
import Form from '../../components/form';
import router from '../../router';

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
                        label: 'Логин',
                        name: 'login',
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
                        name: 'first_name',
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
                        name: 'second_name',
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
                        type: 'password',
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
                        name: 'submit_password',
                        label: 'Пароль (ещё раз)',
                        type: 'password',
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
            submit: [
                'emitSubmitEvent',
                'collectFields',
            ],
        }),
        altBtn: new Button({
            label: 'Войти',
            className: '_flat ',
        }, {
            click: () => {
                router.go('/');
            },
        }),
    },
};

export default ctx;
