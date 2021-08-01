import Block from '../../utils/Block';
import InputType from './InputType';
import tmpl from './index.tmpl';
import './index.scss';

export default class FormInput extends Block {
    constructor(ctx: InputType) {
        super('input', {
            tmpl,
            ctx,
        });
    }
}
