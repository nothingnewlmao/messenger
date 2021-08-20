import inputs from '../../userData';
import './index.scss';
import Button from '../../../components/button';
import FormInput from '../../../components/formInput';
import Form from '../../../components/form';
import UserController from '../../../controllers/UserController';

const userController = new UserController();

const controls = [
    new Button({
        label: 'Изменить данные',
        className: '_flat',
    }),
    new Button({
        label: 'Изменить пароль',
        className: '_flat',
    }),
    new Button({
        label: 'Выйти',
        className: '_flat _negative',
    }, {
        click: () => {
            userController.logout();
        },
    }),
];

const childrenInputs = inputs
    .map(input => new FormInput({
        ...input,
        className: 'profile-input',
    }));
const ctx = {
    children: {
        form: new Form({
            children: {
                inputs: childrenInputs,
            },
        }),
        controls,
    },
};

export default ctx;
