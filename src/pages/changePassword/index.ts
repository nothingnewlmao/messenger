import ProfilePageLayout from '../../layouts/profile/ProfilePageLayout';
import Form from '../../components/form';
import FormInput from '../../components/formInput';
import Button from '../../components/button';

const inputs = [
    {
        label: 'Старый пароль',
        value: '',
        name: 'oldPassword',
        type: 'password',
    },
    {
        label: 'Новый пароль',
        value: '',
        name: 'newPassword',
        type: 'password',
    },
    {
        label: 'Повторите новый пароль',
        value: '',
        name: 'submitPassword',
        type: 'password',
    },
];

const childrenInputs = inputs
    .map(input => new FormInput({
        ...input,
        className: 'profile-input',
    }, {
        blur: ['requiredField'],
        'form-submitted': ['requiredField'],
    }));

const ctx = {
    children: {
        form: new Form({
            children: {
                inputs: childrenInputs,
                submitBtn: new Button({
                    label: 'Сохранить',
                }),
            },
        }, {
            click: [
                'emitSubmitEvent',
                'collectFields',
            ],
        }),
    },
};

const changePassword = new ProfilePageLayout(ctx);
export default changePassword;
