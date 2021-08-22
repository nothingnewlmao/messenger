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

            const popup = target.closest('.chat-page').querySelector('.popup');
            popup.style.display = 'flex';

            const handleSubmit = async event => {
                event.preventDefault();
                const [input] = event.target;
                await chatsApiInstance.create(input.value);
                popup.style.display = 'none';
            };

            const form = popup.querySelector('form');
            form.addEventListener('submit', handleSubmit);
        } catch (e) {
            console.log(e);
        }
    }
}

export default ChatsController;
