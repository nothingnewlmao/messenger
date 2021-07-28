import * as Handlebars from 'handlebars';

export default class CreateLayout {
    ctx;
    element: Element | HTMLElement;
    hbsTemplate: string;
    layoutClass: string;

    render() {
        const element = document.createElement('div');
        element.className = this.layoutClass;
        element.innerHTML = this.template;
        this.element = this.layoutClass ? element : element.firstElementChild;
    }

    get template() {
        const _template = Handlebars.compile(this.hbsTemplate);
        return _template(this.ctx);
    }

    destroy() {
        this.element.remove();
        this.element = null;
    }
}
