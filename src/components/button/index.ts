import tmpl from './index.tmpl';
import './index.scss';
import Block from '../../utils/block/Block';
import ButtonType from './ButtonType';

export default class Button extends Block {
    constructor(ctx: ButtonType) {
        super('button', {
            tmpl,
            ctx,
        });
    }
}
