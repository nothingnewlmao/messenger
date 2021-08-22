import Button from '../../components/button';
import FormInput from '../../components/formInput';
import Icon from '../../components/icon';
import router from '../../router';
import ChatsController from './controllers/ChatsController';

const chatsController = new ChatsController();

const ctx = {
    chatName: '8 team',
    children: {
        newChatBtn: new Button({
            label: 'Создать чат',
            className: '_flat',
            children: {
                icon: new Icon({
                    id: 'create',
                }),
            },
        }, {
            click: event => {
                chatsController.createChat(event);
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
        chatList: [],
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
    },
};

export default ctx;
