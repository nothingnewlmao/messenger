import Block from '../../utils/block/Block';
import InputType from './InputType';
import tmpl from './index.tmpl';
import './index.scss';

export default class FormInput extends Block {
    constructor(ctx: InputType) {
        super('div', {
            tmpl,
            ctx,
        });
    }
}
