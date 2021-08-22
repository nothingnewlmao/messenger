import Block from '../../utils/block/Block';
import tmpl from './index.tmpl';
import './index.scss';
import ChatsController from '../../pages/chat/controllers/ChatsController';
import merge from '../../utils/functions/merge';
import ListChat from '../../components/listChat';
import ObjectLiteral from '../../types/ObjectLiteral';

const chatsController = new ChatsController();

export default class ChatPageLayout extends Block {
    constructor(ctx: any) {
        super('div', {
            ctx: {
                ...ctx,
                className: 'chat-page',
            },
            tmpl,
        });
    }

    async componentCreated() {
        super.componentCreated();
        const chatsString = await chatsController.getChats();
        const chats = JSON.parse(chatsString);
        const newProp = {
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
}
