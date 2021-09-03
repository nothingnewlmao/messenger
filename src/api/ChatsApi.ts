import HTTPTransport from '../utils/HTTPTransport/HTTPTransport';

const BaseUrl = 'https://ya-praktikum.tech/api/v2/chats';

const chatsAPIInstance = new HTTPTransport(BaseUrl);

export default class ChatsApi {
    get() {
        return chatsAPIInstance
            .get('/')
            .then(response => response)
            .catch(e => {
                throw new Error(e);
            });
    }

    create(title = '') {
        return chatsAPIInstance
            .post('/', {
                data: JSON.stringify({title}),
            })
            .then(response => response)
            .catch(e => {
                throw new Error(e);
            });
    }

    getChatToken(chatId: number = 0) {
        return chatsAPIInstance
            .post(`/token/${chatId}`)
            .then(response => response)
            .catch(e => {
                throw new Error(e);
            });
    }

    addUser(users: string[], chatId: number) {
        return chatsAPIInstance
            .put('/users', {
                data: JSON.stringify({users, chatId}),
            })
            .then(response => response)
            .catch(e => {
                throw new Error(e);
            });
    }
}
