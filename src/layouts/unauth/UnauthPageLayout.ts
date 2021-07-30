import tmpl from './index.tpml';
import UnauthPageType from './unauthPageType';
import CreateLayout from '../CreateLayout';
import collectFormFieldsMixin from '../../mixins/collectFormFields';
import validateFieldMixin from '../../mixins/validateFieldMixin';

Object.assign(CreateLayout.prototype,
    collectFormFieldsMixin,
    validateFieldMixin);

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
        this.initInputsValidation();
    }

    collectFields() {
        const submitButton = this.element
            .querySelector('button[type="submit"]');
        submitButton.addEventListener('click', this.collectFormFields);
    }

    initInputsValidation(): void {
        const inputs: HTMLElement[] | null = [...this.element.querySelectorAll('input')];
        const hasInputs = Boolean(inputs) === true;

        if (!hasInputs) {
            return;
        }

        inputs.forEach((input: HTMLElement) => {
            input.addEventListener('blur', this.validateField);
        });
    }
}
