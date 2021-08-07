import tmpl from './index.tmpl';
import Block from '../../utils/block/Block';
import FormType from './FormType';

export default class Form extends Block {
    constructor(ctx: FormType, events = {}) {
        super('form', {
            tmpl,
            ctx,
            events,
        });
    }
}
