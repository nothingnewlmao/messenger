import inputs from '../../userData';
import './index.scss';
import Button from '../../../components/button';
import FormInput from '../../../components/formInput';
import Form from '../../../components/form';
import UserController from '../../../controllers/UserController';
import router from '../../../router';
import Icon from '../../../components/icon';

const userController = new UserController();

const childrenInputs = inputs
    .map(input => new FormInput({
        ...input,
        className: 'profile-input',
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
                router.go('/messenger');
            },
        }),
        form: new Form({
            children: {
                inputs: childrenInputs,
            },
        }),
        controls: [
            new Button({
                label: 'Изменить данные',
                className: '_flat',
            }, {
                click: () => {
                    router.go('/settings/edit');
                },
            }),
            new Button({
                label: 'Изменить пароль',
                className: '_flat',
            }, {
                click: () => {
                    router.go('/settings/password');
                },
            }),
            new Button({
                label: 'Выйти',
                className: '_flat _negative',
            }, {
                click: () => {
                    userController.logout();
                },
            }),
        ],
    },
};

export default ctx;
