import tmpl from './index.tmpl';
import ErrorPageType from './errorPageType';
import * as Handlebars from 'handlebars';

export default class ErrorPageLayout {
    element: null | HTMLElement;
    pageFields;

    constructor(pageFields: ErrorPageType) {
        this.pageFields = pageFields;
        this.render();
    }

    render() {
        const element = document.createElement('div');
        element.className = 'error-page';
        element.innerHTML = this.template;
        this.element = element;
    }

    get template() {
        const _template = Handlebars.compile(tmpl);
        return _template(this.pageFields);
    }
}
