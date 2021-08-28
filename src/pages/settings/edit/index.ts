import inputs from '../../userData';
import Button from '../../../components/button';
import FormInput from '../../../components/formInput';
import Form from '../../../components/form';
import UserController from '../../../controllers/UserController';
import Popup from '../../../components/popup';
import router from '../../../router';
import Icon from '../../../components/icon';
import EventHtmlTargetType from '../../../types/events/EventHtmlTargetType';

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
                await userController.changeUserProfile(event);
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
                    submit: async (event: EventHtmlTargetType) => {
                        await userController.changeAvatar(event);
                    },
                }),
            },
        }),
    },
};

export default ctx;
