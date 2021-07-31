import tmpl from './index.tmpl';
import ErrorPageType from './errorPageType';
import CreateLayout from '../CreateLayout';

export default class ErrorPageLayout extends CreateLayout {
    constructor(ctx: ErrorPageType) {
        super(tmpl, ctx, 'error-page');
    }
}
