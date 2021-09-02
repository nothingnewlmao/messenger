import Button from '../../components/button';
import FormInput from '../../components/formInput';
import Icon from '../../components/icon';
import router from '../../router';
import Popup from '../../components/popup';
import Form from '../../components/form';

const ctx = {
    chatTitle: '',
    children: {
        newChatBtn: new Button({
            label: 'Создать чат',
            className: '_flat',
            children: {
                icon: new Icon({
                    id: 'create',
                }),
            },
        }),
        profileBtn: new Button({
            label: 'Профиль',
            className: '_flat',
            children: {
                icon: new Icon({
                    id: 'navigate_next',
                }),
            },
            iconAfter: true,
        }, {
            click: () => {
                router.go('/settings');
            },
        }),
        addUserBtn: new Button({
            className: '_flat _round',
            children: {
                icon: new Icon({
                    id: 'person_add',
                }),
            },
        }),
        newMessageFiles: new Button({
            className: '_flat _round',
            children: {
                icon: new Icon({
                    id: 'attach_file',
                }),
            },
        }),
        newMessageInput: new FormInput({
            name: 'newMessage',
            className: 'new-message',
        }),
        sendMessage: new Button({
            className: '_round',
            children: {
                icon: new Icon({
                    id: 'send',
                }),
            },
        }),
        createChatPopup: new Popup({
            title: 'Придумайте название чата',
            children: {
                body: new Form({
                    children: {
                        inputs: [
                            new FormInput({
                                name: 'title',
                                className: 'unauth-input',
                            }),
                        ],
                        submitBtn: new Button({
                            label: 'Создать чат',
                        }),
                    },
                }),
            },
        }),
        addUserPopup: new Popup({
            title: 'Добавить пользователя',
            children: {
                body: new Form({
                    children: {
                        inputs: [
                            new FormInput({
                                name: 'title',
                                className: 'unauth-input',
                            }),
                        ],
                        submitBtn: new Button({
                            label: 'Добавить',
                        }),
                    },
                }),
            },
        }),
    },
};

export default ctx;
