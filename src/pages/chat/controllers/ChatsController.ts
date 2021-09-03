import ChatsApi from '../../../api/ChatsApi';
import {createChatWS} from '../../../utils/chatWS/ChatWS';
import Popup from '../../../components/popup';
import router from '../../../router';
import EventFormInputType from '../../../types/events/EventFormInputType';
import ObjectLiteral from '../../../types/ObjectLiteral';

const chatsApiInstance = new ChatsApi();

class ChatsController {
    public async getChats() {
        try {
            return await chatsApiInstance.get();
        } catch (e) {
            router.go('/401');
            throw new Error(e);
        }
    }

    public async createChat(popup: Popup) {
        try {
            popup.show();

            const handleSubmit = async (event: EventFormInputType) => {
                event.preventDefault();
                const [input] = event.target;
                await chatsApiInstance.create(input.value);
                popup.hide();
                router.go();
            };

            const form = popup.getContent().querySelector('form');
            form.addEventListener('submit', handleSubmit);
        } catch (e) {
            console.log(e);
            router.go('/401');
        }
    }

    public async getToken(id: number) {
        try {
            const chatTokenString: unknown = await chatsApiInstance.getChatToken(id);
            const {token: chatToken} = JSON.parse(chatTokenString as string);

            return chatToken;
        } catch (e) {
            console.log(e);
        }
    }

    public async connectToChat(
        userId: number,
        event: CustomEvent,
        handleMsgFn: (message: ObjectLiteral) => void,
    ) {
        try {
            const {id: chatId} = event.detail;
            const tokenValue: string = await this.getToken(chatId);
            const params = {
                userId,
                chatId,
                tokenValue,
            };
            return createChatWS(params, handleMsgFn);
        } catch (e) {
            console.log(e);
        }
    }

    public async sendMessage(socket: WebSocket, event: Event & { target: HTMLElement }) {
        const {target} = event;
        const messageInput = target.closest('.chat__create').querySelector('input');
        const {value} = messageInput;
        const message = {
            content: value,
            type: 'message',
        };
        socket.send(JSON.stringify(message));
        messageInput.value = '';
    }

    public async addUser(popup: Popup, chatId: number) {
        popup.show();

        const handleSubmit = async (event: EventFormInputType) => {
            event.preventDefault();
            const [input] = event.target;
            const users = input.value.split(',');
            await chatsApiInstance.addUser(users, chatId);
            popup.hide();
        };

        const form = popup.getContent().querySelector('form');
        form.addEventListener('submit', handleSubmit);
    }
}

export default ChatsController;
