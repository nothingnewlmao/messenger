import Block from '../../utils/block/Block';
import UnauthPageType from './unauthPageType';
import tmpl from './index.tpml';

export default class UnauthPageLayout extends Block {
    constructor(ctx: UnauthPageType) {
        super('div', {
            ctx: {
                ...ctx,
                className: 'unauth',
            },
            tmpl,
        });
    }
}
