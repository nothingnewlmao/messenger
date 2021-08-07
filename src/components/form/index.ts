import tmpl from './index.tmpl';
import Block from '../../utils/block/Block';
import FormType from './FormType';

export default class Form extends Block {
    constructor(ctx: FormType) {
        super('form', {
            tmpl,
            ctx,
        });
    }

    addEventListeners() {
        const inputs = this.getContent().querySelectorAll('input');

        if (inputs) {
            inputs.forEach((input: any) => {
                input.addEventListener('blur', this.emitFieldsValidate);
                input.addEventListener('focus', this.emitFieldsValidate);
                input.addEventListener('validate', this.emitFieldsValidate);
            });
        }
    }

    emitFieldsValidate = (event: Event) => {
        console.log(event);
    }
}
