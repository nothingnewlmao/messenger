import HTTPTransport from '../utils/HTTPTransport/HTTPTransport';
import BasicAPI from './BasicAPI';

const BaseUrl = 'https://ya-praktikum.tech/api/v2/chats';

const chatsAPIInstance = new HTTPTransport(BaseUrl);

export default class ChatsApi extends BasicAPI {
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
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then(response => response)
            .catch(e => {
                throw new Error(e);
            });
    }
}
