import Form from '../../../components/form';
import FormInput from '../../../components/formInput';
import Button from '../../../components/button';
import UserController from '../../../controllers/UserController';
import router from '../../../router';
import Icon from '../../../components/icon';

const userController = new UserController();

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
        backBtn: new Button({
            children: {
                icon: new Icon({id: 'arrow_back'}),
            },
            className: '_round',
        }, {
            click: () => {
                router.go('/settings');
            },
        }),
        form: new Form({
            children: {
                inputs: childrenInputs,
                submitBtn: new Button({
                    label: 'Сохранить',
                }),
            },
        }, {
            submit: [
                'emitSubmitEvent',
                'collectFields',
            ],
            'fields-collected': async (event: CustomEvent) => {
                const {data} = event.detail;
                await userController.changePassword(data);
            },
        }),
    },
};

export default ctx;
