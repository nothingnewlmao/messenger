import inputs from '../../userData';
import Button from '../../../components/button';
import FormInput from '../../../components/formInput';
import Form from '../../../components/form';
import UserController from '../../../controllers/UserController';
import Popup from '../../../components/popup';
import router from '../../../router';
import Icon from '../../../components/icon';

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
        backBtn: new Button({
            children: {
                icon: new Icon({id: 'arrow_back'}),
            },
            className: '_round',
        }, {
            click: () => {
                router.back();
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
                await userController.changeUserProfile(data);
            },
        }),
        popup: new Popup({
            title: 'Загрузите файл',
            children: {
                body: new Form({
                    children: {
                        inputs: [
                            new FormInput({
                                type: 'file',
                                name: 'avatar',
                                accept: ['.jpg', '.jpeg', '.png'],
                            }),
                        ],
                        submitBtn: new Button({
                            label: 'Поменять',
                        }),
                    },
                }, {
                    submit: async event => {
                        event.preventDefault();
                        const {target} = event;

                        const imgInput = target.querySelector('input[type="file"]');
                        const [file] = imgInput.files;

                        const formData: FormData = new FormData();
                        formData.append('avatar', file);
                        await userController.changeAvatar(formData);
                    },
                }),
            },
        }),
    },
};

export default ctx;
