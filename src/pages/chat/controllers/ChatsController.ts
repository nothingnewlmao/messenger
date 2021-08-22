import ChatsApi from '../../../api/ChatsApi';
import {createChatWS} from '../../../utils/chatWS/ChatWS';
import Popup from '../../../components/popup';

const chatsApiInstance = new ChatsApi();

class ChatsController {
    public async getChats() {
        try {
            return await chatsApiInstance.get();
        } catch (e) {
            console.log(e);
        }
    }

    public async createChat(popup: Popup) {
        try {
            popup.show();

            const handleSubmit = async (event: Event) => {
                event.preventDefault();
                const [input] = event.target;
                await chatsApiInstance.create(input.value);
                popup.hide();
            };

            const form = popup.getContent().querySelector('form');
            form.addEventListener('submit', handleSubmit);
        } catch (e) {
            console.log(e);
        }
    }

    public async getToken(id: string) {
        try {
            const chatTokenString = await chatsApiInstance.getChatToken(id);
            const {token: chatToken} = JSON.parse(chatTokenString);

            return chatToken;
        } catch (e) {
            console.log(e);
        }
    }

    public async connectToChat(userId: number, event: CustomEvent) {
        try {
            const {id: chatId} = event.detail;
            const chatToken = await this.getToken(chatId);
            return createChatWS(userId, chatId, chatToken);
        } catch (e) {
            console.log(e);
        }
    }

    public async sendMessage(socket: WebSocket, event: Event) {
        const {target} = event;
        const messageInput = target.closest('.chat__create').querySelector('input');
        const {value} = messageInput;
        const message = {
            content: value,
            type: 'message',
        };
        socket.send(JSON.stringify(message));
    }

    public async addUser(popup: Popup, chatId: number) {
        popup.show();

        const handleSubmit = async (event: Event) => {
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
