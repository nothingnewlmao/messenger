import tmpl from './index.tmpl';
import Block from '../../utils/block/Block';
import IconType from './IconType';
import './index.scss';

export default class Icon extends Block {
    constructor(ctx: IconType) {
        super('div', {
            tmpl,
            ctx: {
                ...ctx,
                className: 'icon',
            },
        });
    }
}
