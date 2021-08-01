import tmpl from './index.tmpl';
import Block from '../../utils/Block';

export default class Form extends Block {
    constructor(ctx) {
        super('form', {
            tmpl,
            ctx,
        });
    }
}
