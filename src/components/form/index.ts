import tmpl from './index.tmpl';
import Block from '../../utils/block/Block';
import FormType from './FormType';
import FormInput from '../formInput';
import ObjectLiteral from '../../types/ObjectLiteral';

export default class Form extends Block {
    emitSubmitEvent = (event: Event) => {
        event.preventDefault();
        const {inputs} = this.props.ctx.children;
        inputs.forEach((label: FormInput) => {
            const input = label.getContent().querySelector('input');
            const submitFormEvent = new Event('form-submitted');
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
            json[name] = value;
            return json;
        }, {});
        console.log(requestJson);
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
            const blockHandlers = handler instanceof Array;
            const target = this.children.submitBtn;
            if (blockHandlers) {
                handler.forEach((callback: string) => {
                    target.addEventListener(event, this[callback]);
                });
            } else {
                target.addEventListener(event, handler);
            }
        });
    }
}
