import tmpl from './index.tmpl';
import Block from '../../utils/Block';
import validateFieldMixin from '../../mixins/validateFieldMixin';

Object.assign(Block.prototype,
    validateFieldMixin);

export default class Form extends Block {
    constructor(ctx) {
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
            inputs.forEach(label => {
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

    emitFieldsValidate = event => {
        console.log(event);
    }
}
