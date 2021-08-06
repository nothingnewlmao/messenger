import tmpl from './index.tmpl';
import Block from '../../utils/block/Block';
import FormType from './FormType';
import validateFieldMixin from '../../mixins/validateFieldMixin';

Object.assign(Block.prototype,
    validateFieldMixin);

export default class Form extends Block {
    constructor(ctx: FormType) {
        super('form', {
            tmpl,
            ctx,
        });
    }

    addEventListeners() {
        const {
            inputs,
            submitBtn,
        } = this.children;

        if (inputs) {
            inputs.forEach((label: HTMLElement): void => {
                const input = label.querySelector('input');
                input.addEventListener('blur', this.validateField);
                input.addEventListener('focus', this.validateField);
                input.addEventListener('validate', this.validateField);
            });
        }

        if (submitBtn) {
            submitBtn.addEventListener('click', this.emitFieldsValidate);
        }
    }

    emitFieldsValidate = (event: Event) => {}
}
