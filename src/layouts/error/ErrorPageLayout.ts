import Block from '../../utils/Block';
import ErrorPageType from './errorPageType';
import tmpl from './index.tmpl';
import './index.scss';

export default class ErrorPageLayout extends Block {
    constructor(ctx: ErrorPageType) {
        super('div', {
            ctx,
            wrapperClass: 'error-page',
            tmpl,
        });
    }
}
