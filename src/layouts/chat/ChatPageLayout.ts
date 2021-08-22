import Block from '../../utils/block/Block';
import tmpl from './index.tmpl';
import './index.scss';
import ChatsController from '../../pages/chat/controllers/ChatsController';
import merge from '../../utils/functions/merge';
import ListChat from '../../components/listChat';
import ObjectLiteral from '../../types/ObjectLiteral';
import UserController from '../../controllers/UserController';

const chatsController = new ChatsController();
const userController = new UserController();

export default class ChatPageLayout extends Block {
    constructor(ctx: any) {
        super('div', {
            ctx: {
                ...ctx,
                className: 'chat-page',
            },
            tmpl,
        });

        this.addEventListeners();
    }

    async componentCreated() {
        super.componentCreated();
        const userId = await userController
            .getUserInfo()
            .then(response => {
                const res = JSON.parse(response);
                return res.id;
            });

        const chatsString = await chatsController.getChats();
        const chats = JSON.parse(chatsString);
        const newProp = {
            userId,
            ctx: {
                children: {
                    chatList: chats
                        .map((chat: ObjectLiteral) => new ListChat(chat)),
                },
            },
        };

        const newProps = merge(this.props, newProp);
        this.setProps(newProps);
    }

    addEventListeners() {
        super.addEventListeners();
        this.getContent().addEventListener('list-chat-click', this.handleListChatClick);
    }

    handleListChatClick = async (event: CustomEvent) => {
        const {userId} = this.props;
        await chatsController.connectToChat(userId, event);
    }
}
