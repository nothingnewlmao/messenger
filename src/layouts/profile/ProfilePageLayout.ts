import Block from '../../utils/block/Block';
import tmpl from './index.tmpl';
import ObjectLiteral from '../../types/ObjectLiteral';

export default class ProfilePageLayout extends Block {
    constructor(ctx: ObjectLiteral) {
        super('div', {
            ctx: {
                ...ctx,
            },
            tmpl,
        });
    }
}
