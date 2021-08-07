import Block from '../../utils/block/Block';
import InputType from './InputType';
import tmpl from './index.tmpl';
import './index.scss';
import ObjectLiteral from '../../types/ObjectLiteral';

export default class FormInput extends Block {
    constructor(ctx: InputType, events?: ObjectLiteral) {
        super('div', {
            tmpl,
            ctx,
            events,
        });
    }
}
