import inputs from '../../userData';
import Button from '../../../components/button';
import FormInput from '../../../components/formInput';
import Form from '../../../components/form';
import UserController from '../../../controllers/UserController';

const userController = new UserController();

const childrenInputs = inputs
    .map(input => new FormInput({
        ...input,
        className: 'profile-input',
        readonly: false,
    }, {
        blur: [
            'loginCheck',
            'requiredField',
        ],
        'form-submitted': [
            'loginCheck',
            'requiredField',
        ],
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
            submit: [
                'emitSubmitEvent',
                'collectFields',
            ],
            'fields-collected': async (event: CustomEvent) => {
                const {data} = event.detail;
                await userController.changeUserProfile(data);
            },
        }),
    },
};

export default ctx;
