import Button from '../../components/button';
import ChatPageLayout from '../../layouts/chat/ChatPageLayout';
import renderPage from '../../utils/renderHelpers/renderPage';
import FormInput from '../../components/formInput';

const ctx = {
    chatName: '8 team',
    children: {
        newChatBtn: new Button({
            label: 'Создать чат',
            icon: {
                id: 'create',
            },
            className: '_flat',
        }),
        profileBtn: new Button({
            label: 'Профиль',
            className: '_flat',
        }),
        newMessageFiles: new Button({
            className: '_flat _round',
            icon: {
                id: 'attach_file',
            },
        }),
        newMessageInput: new FormInput({
            name: 'newMessage',
            className: 'new-message',
        }),
        sendMessage: new Button({
            className: '_round',
            icon: {
                id: 'send',
            },
        }),
    },
};

const chatPage = new ChatPageLayout(ctx);
renderPage(chatPage);
