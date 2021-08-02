import tmpl from './index.tmpl';
import Block from '../../utils/block/Block';
import IconType from './IconType';

export default class Icon extends Block {
    constructor(ctx: IconType) {
        super('div', {
            tmpl,
            ctx,
        });
    }
}
