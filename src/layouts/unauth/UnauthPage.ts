import tmpl from './index.tpml';
import UnauthPageType from './unauthPageType';
import * as Handlebars from 'handlebars';

export default class UnauthPage {
    pageFields;
    element: null | HTMLElement;

    constructor(pageFields: UnauthPageType) {
        this.pageFields = pageFields;
        this.render();
    }

    render() {
        const element = document.createElement('div');
        element.className = 'unauth';
        element.innerHTML = this.template;
        this.element = element;
    }

    get template() {
        const _template = Handlebars.compile(tmpl);
        return _template(this.pageFields);
    }
}
