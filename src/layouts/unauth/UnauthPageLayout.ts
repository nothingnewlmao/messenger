import tmpl from './index.tpml';
import UnauthPageType from './unauthPageType';
import CreateLayout from '../CreateLayout';

export default class UnauthPageLayout extends CreateLayout {
    constructor(ctx: UnauthPageType) {
        super();
        this.hbsTemplate = tmpl;
        this.ctx = ctx;
        this.render();
    }
}
