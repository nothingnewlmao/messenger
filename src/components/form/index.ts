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

    addEventListeners() {
        const {
            inputs,
            submitBtn,
        } = this.props.ctx.children;

        console.log(this);

        if (inputs) {
            inputs.forEach((label: any): void => {
                const input = label.getContent().querySelector('input');
                input.addEventListener('blur', this.emitFieldsValidate);
                input.addEventListener('focus', this.emitFieldsValidate);
                input.addEventListener('validate', this.emitFieldsValidate);
            });
        }

        submitBtn.getContent().addEventListener('click', this.emitFieldsValidate);
    }

    /**
     * В контексте пишем, какая должна быть проверка у поля
     * проходимся по массиву проверок и добавляем обработчики
     */

    emitFieldsValidate() {
        console.log(this.value);
    }



    /* ValidateField(event: Event & { target: HTMLInputElement }) {
        const REGEX: RegExp = /[<>\$\|\?&,]/g;
        const {target} = event;
        const {value} = target;
        if (value.match(REGEX)) {
            const errorEvent: Event = new Event('input-error');
            target.dispatchEvent(errorEvent);
            target.parentElement.classList.add('_error');
        } else {
            target.parentElement.classList.remove('_error');
        }
    }

    inputsValidation(event: Event & { target: Element }) {
        event.preventDefault();
        const {target} = event;
        const form = target.closest('form');
        const inputs = [...form.querySelectorAll('input')];
        const formJson = inputs
            .reduce((json: {[key: string]: string|number}, {name, value}) => {
                json[name] = value;
                return json;
            },
            {});
        console.log(formJson);
    }

    emitInputsValidation(event: Event & { target: Element }) {
        event.preventDefault();
        const validateEvent = new Event('validate');
        const {target} = event;
        const form = target.closest('form');
        const inputs = [...form.querySelectorAll('input')];
        inputs.forEach(input => {
            input.dispatchEvent(validateEvent);
        });
    } */
}
