import tmpl from './index.tmpl';
import './index.scss';
import Block from '../../utils/Block';
import ButtonType from './ButtonType';

export default class Button extends Block {
    constructor(ctx: ButtonType) {
        super('div', {
            tmpl,
            ctx,
        });
    }
}
