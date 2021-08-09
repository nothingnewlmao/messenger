import Block from '../../utils/block/Block';
import InputType from './InputType';
import tmpl from './index.tmpl';
import './index.scss';
import ObjectLiteral from '../../types/ObjectLiteral';

export default class FormInput extends Block {
    static ERROR_TEXTS = {
        WRONG_SYMBOLS: 'Введены недопустимые символы',
        WRONG_PASS: 'Неправильный пароль',
        WRONG_EMAIL: 'Неправильный формат email',
        WRONG_PHONE: 'Неправильный формат номера телефона',
        EMPTY_FIELD: 'Не заполнено обязательное поле',
    }

    requiredField = (event: Event & { target: Element & { value: string } }) => {
        const REGEXP = /^.+$/g;
        const {value} = event.target;
        this.checkVal(value, REGEXP, FormInput.ERROR_TEXTS.EMPTY_FIELD);
    }

    loginCheck = (event: Event & { target: Element & { value: string } }) => {
        const REGEXP = /^[\w\d]*$/ig;
        const {value} = event.target;
        this.checkVal(value, REGEXP, FormInput.ERROR_TEXTS.WRONG_SYMBOLS);
    }

    phoneCheck = (event: Event & { target: Element & { value: string } }) => {
        const regexp = /^(\+7|7)[0-9]{10}$/;
        const {value} = event.target;
        this.checkVal(value, regexp, FormInput.ERROR_TEXTS.WRONG_PHONE);
    }

    emailCheck = (event: Event & { target: Element & { value: string } }) => {
        const regexp = /^[\w\d.-]*@[\w\d.-]*$/;
        const {value} = event.target;
        this.checkVal(value, regexp, FormInput.ERROR_TEXTS.WRONG_EMAIL);
    }

    onlyLetters = (event: Event & { target: Element & { value: string } }) => {
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
