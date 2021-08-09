import Block from '../../utils/block/Block';
import tmpl from './index.tmpl';
import './index.scss';

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
}
