import Block from '../../utils/block/Block';
import ObjectLiteral from '../../types/ObjectLiteral';
import tmpl from './index.tmpl';
import './index.scss';

export default class ListChat extends Block {
    constructor(ctx: ObjectLiteral) {
        super('div', {
            ctx: {
                ...ctx,
                className: 'list-chat',
            },
            tmpl,
        });

        this.addEventListeners();
    }

    addEventListeners() {
        super.addEventListeners();
        this.getContent().addEventListener('click', this.emitClick);
    }

    emitClick = (event: Event) => {
        const {id} = this.props.ctx;
        const listChatClickEvent = new CustomEvent('list-chat-click', {
            detail: {id},
            bubbles: true,
        });
        this.getContent().dispatchEvent(listChatClickEvent);
    }
}
