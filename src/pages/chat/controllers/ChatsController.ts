import ChatsApi from '../../../api/ChatsApi';

const chatsApiInstance = new ChatsApi();

class ChatsController {
    public async getChats() {
        try {
            return await chatsApiInstance.get();
        } catch (e) {
            console.log(e);
        }
    }

    public async createChat(event: Event) {
        try {
            const {target} = event;
            return await chatsApiInstance.create();
        } catch (e) {
            console.log(e);
        }
    }
}

export default ChatsController;
