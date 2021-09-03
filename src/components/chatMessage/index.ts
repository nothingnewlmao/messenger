import Block from '../../utils/block/Block';
import ObjectLiteral from '../../types/ObjectLiteral';
import tmpl from './index.tmpl';
import './index.scss';

export default class ChatMessage extends Block {
    constructor(ctx: ObjectLiteral) {
        super('div', {
            ctx: {
                ...ctx,
                className: 'message',
            },
            tmpl,
        });
    }
}
