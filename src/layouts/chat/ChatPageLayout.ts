import Block from '../../utils/block/Block';
import tmpl from './index.tmpl';
import './index.scss';
import ChatsController from '../../pages/chat/controllers/ChatsController';
import merge from '../../utils/functions/merge';
import ListChat from '../../components/listChat';
import ObjectLiteral from '../../types/ObjectLiteral';
import UserController from '../../controllers/UserController';
import EventHtmlTargetType from '../../types/events/EventHtmlTargetType';
import ChatMessage from '../../components/chatMessage';

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
        try {
            const userId = await userController
                .getUserInfo()
                .then((response: unknown) => {
                    const res = JSON.parse(response as string);
                    return res.id;
                });

            const chatsString: unknown = await chatsController.getChats();
            const chats = JSON.parse(chatsString as string);
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
        } catch (e) {
            console.log(e);
        }
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
        const nextProps = {
            ctx: {
                children: {
                    messages: null as ChatMessage,
                },
            },
        };

        this.setProps(merge(this.props, nextProps));

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
        const socket = await chatsController
            .connectToChat(userId, event, this.handleWsMsg);
        this.setProps(merge(this.props, {socket}));

        this.getOldMessages();
    }

    handleSendMessageClick = (event: EventHtmlTargetType) => {
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

    handleWsMsg = (message: ObjectLiteral | ObjectLiteral[]) => {
        const isArray = message instanceof Array;

        const {messages} = this.props.ctx.children;
        const newMsg = isArray
            ? message.map((content: ObjectLiteral) => new ChatMessage(content))
            : new ChatMessage(message);

        let newMessages;

        if (isArray) {
            // @ts-ignore
            newMessages = messages ? [...messages, ...newMsg] : [...newMsg];
        } else {
            newMessages = messages ? [...messages, newMsg] : [newMsg];
        }

        const nextProps = {
            ctx: {
                children: {
                    messages: newMessages,
                },
            },
        };

        this.setProps(merge(this.props, nextProps));
    }

    getOldMessages() {
        const {socket} = this.props;
        socket.addEventListener('open', () => {
            socket.send(JSON.stringify({
                content: '0',
                type: 'get old',
            }));
        });
    }
}
