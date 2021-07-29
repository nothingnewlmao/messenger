import tmpl from './index.tpml';
import UnauthPageType from './unauthPageType';
import CreateLayout from '../CreateLayout';
import collectFormFieldsMixin from '../../mixins/collectFormFields';

Object.assign(CreateLayout.prototype, collectFormFieldsMixin);

export default class UnauthPageLayout extends CreateLayout {
    constructor(ctx: UnauthPageType) {
        super();
        this.hbsTemplate = tmpl;
        this.ctx = ctx;
        this.render();
    }

    initEventListeners() {
        super.initEventListeners();
        this.collectFields();
    }

    collectFields() {
        const submitButton = this.element
            .querySelector('button[type="submit"]');
        submitButton.addEventListener('click', this.collectFormFields);
    }
}
