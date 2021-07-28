import tmpl from './index.tmpl';
import ErrorPageType from './errorPageType';
import CreateLayout from '../CreateLayout';

export default class ErrorPageLayout extends CreateLayout {
    constructor(ctx: ErrorPageType) {
        super();
        this.ctx = ctx;
        this.hbsTemplate = tmpl;
        this.layoutClass = 'error-page';
        this.render();
    }
}
