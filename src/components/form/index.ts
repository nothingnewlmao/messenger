import tmpl from './index.tmpl';
import Block from '../../utils/Block';
import FormType from './FormType';

export default class Form extends Block {
    constructor(ctx: FormType) {
        super('form', {
            tmpl,
            ctx,
        });
    }
}
