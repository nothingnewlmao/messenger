import tmpl from './index.tpml';
import UnauthPageType from './unauthPageType';
import * as Handlebars from 'handlebars';

export default class UnauthPage {
    ctx;
    element: null | HTMLElement;

    constructor(ctx: UnauthPageType) {
        this.ctx = ctx;
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
        return _template(this.ctx);
    }
}
