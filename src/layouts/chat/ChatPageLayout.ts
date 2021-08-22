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
        await this.getChats();
    }

    async getChats() {
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

        this._element.addEventListener('list-chat-click', this.handleListChatClick);

        const sendMessageBtn = this.props.ctx.children.sendMessage.getContent();
        sendMessageBtn.addEventListener('click', this.handleSendMessageClick);

        const addUserBtn = this.props.ctx.children.addUserBtn.getContent();
        addUserBtn.addEventListener('click', this.handleAddUserClick);

        const newChatBtn = this.props.ctx.children.newChatBtn.getContent();
        newChatBtn.addEventListener('click', this.handleNewChatClick);
    }

    handleListChatClick = async (event: CustomEvent) => {
        const {
            title: chatTitle,
            avatar: chatAvatar,
            id: chatId,
        } = event.detail;
        const newProp = {
            chatId,
            ctx: {
                chatTitle,
                chatAvatar,
                chatId,
            },
        };
        const newProps = merge(this.props, newProp);
        this.setProps(newProps);

        const {userId} = this.props;
        const socket = await chatsController.connectToChat(userId, event);
        this.setProps(merge(this.props, {socket}));
    }

    handleSendMessageClick = (event: Event) => {
        const {socket} = this.props;
        chatsController.sendMessage(socket, event);
    }

    handleAddUserClick = (event: Event) => {
        event.preventDefault();
        const {chatId} = this.props;
        const {addUserPopup} = this.props.ctx.children;
        chatsController.addUser(addUserPopup, chatId);
    }

    handleNewChatClick = () => {
        const {createChatPopup} = this.props.ctx.children;
        chatsController.createChat(createChatPopup);
    }
}
