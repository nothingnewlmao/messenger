import Block from '../../utils/block/Block';
import InputType from './InputType';
import tmpl from './index.tmpl';
import './index.scss';
import ObjectLiteral from '../../types/ObjectLiteral';
import EventHtmlTargetValueStringType from '../../types/events/EventHtmlTargetValueStringType';

export default class FormInput extends Block {
    static ERROR_TEXTS = {
        WRONG_SYMBOLS: 'Введены недопустимые символы',
        WRONG_PASS: 'Неправильный пароль',
        WRONG_EMAIL: 'Неправильный формат email',
        WRONG_PHONE: 'Неправильный формат номера телефона',
        EMPTY_FIELD: 'Не заполнено обязательное поле',
    }

    requiredField = (event: EventHtmlTargetValueStringType) => {
        const REGEXP = /^.+$/g;
        const {value} = event.target;
        this.checkVal(value, REGEXP, FormInput.ERROR_TEXTS.EMPTY_FIELD);
    }

    loginCheck = (event: EventHtmlTargetValueStringType) => {
        const REGEXP = /^[\w\d]*$/ig;
        const {value} = event.target;
        this.checkVal(value, REGEXP, FormInput.ERROR_TEXTS.WRONG_SYMBOLS);
    }

    phoneCheck = (event: EventHtmlTargetValueStringType) => {
        const regexp = /^(\+7|7)[0-9]{10}$/;
        const {value} = event.target;
        this.checkVal(value, regexp, FormInput.ERROR_TEXTS.WRONG_PHONE);
    }

    emailCheck = (event: EventHtmlTargetValueStringType) => {
        const regexp = /^[\w\d.-]*@[\w\d.-]*$/;
        const {value} = event.target;
        this.checkVal(value, regexp, FormInput.ERROR_TEXTS.WRONG_EMAIL);
    }

    onlyLetters = (event: EventHtmlTargetValueStringType) => {
        const regexp = /^\w+$/;
        const {value} = event.target;
        this.checkVal(value, regexp, FormInput.ERROR_TEXTS.WRONG_SYMBOLS);
    }

    constructor(ctx: InputType, events?: ObjectLiteral) {
        super('div', {
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
            const target = this._element.querySelector('input');
            if (blockHandlers) {
                handler.forEach((callback: string) => {
                    // @ts-ignore
                    target.addEventListener(event, this[callback]);
                });
            } else {
                target.addEventListener(event, handler);
            }
        });
    }

    checkVal(value: string, regex: RegExp, error: string) {
        const hasError = !value.match(regex);
        if (hasError) {
            const newProps = {
                ctx: {
                    ...this.props.ctx,
                    value,
                    error,
                },
                events: {...this.props.events},
            };
            this.setProps(newProps);
        } else {
            this.removeError(value);
        }
    }

    removeError(value?: string|Number) {
        const newProps = {
            ctx: {
                ...this.props.ctx,
                value,
                error: '',
            },
            events: {...this.props.events},
        };
        this.setProps(newProps);
    }
}
