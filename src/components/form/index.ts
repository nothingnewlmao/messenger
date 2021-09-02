import tmpl from './index.tmpl';
import Block from '../../utils/block/Block';
import FormType from './FormType';
import FormInput from '../formInput';
import ObjectLiteral from '../../types/ObjectLiteral';
import sanitizeInputValue from '../../utils/functions/sanitizeInputValue';

export default class Form extends Block {
    emitSubmitEvent = (event: Event) => {
        event.preventDefault();

        const {inputs} = this.props.ctx.children;
        const submitFormEvent = new Event('form-submitted');

        inputs.forEach((label: FormInput) => {
            const input = label.getContent().querySelector('input');
            input.dispatchEvent(submitFormEvent);
        });
    }

    collectFields = (event: Event) => {
        event.preventDefault();
        const {inputs} = this.children;
        const requestJson = inputs.reduce((json: ObjectLiteral, label: Element) => {
            const input = label.querySelector('input');
            const {
                name,
                value,
            } = input;
            json[name] = sanitizeInputValue(value);
            return json;
        }, {});

        const collectedFields = new CustomEvent('fields-collected', {
            bubbles: true,
            detail: {
                data: requestJson,
            },
        });
        this.getContent().dispatchEvent(collectedFields);
    }

    constructor(ctx: FormType, events = {}) {
        super('form', {
            tmpl,
            ctx,
            events,
        });

        this.addEventListeners();
    }

    addEventListeners() {
        const {events = {}} = this.props;

        Object.keys(events).forEach(event => {
            const handler = events[event];
            const someHandlers = handler instanceof Array;
            const target = this.getContent();
            if (someHandlers) {
                handler.forEach((callback: string) => {
                    // @ts-ignore
                    target.addEventListener(event, this[callback]);
                });
            } else {
                target.addEventListener(event, handler);
            }
        });
    }
}
