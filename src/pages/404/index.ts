import tmpl from '../../layouts/error/index.tmpl';
import ErrorPageType from '../../layouts/error/errorPageType';
import * as Handlebars from 'handlebars';

export default class Page404 {
    element: null | HTMLElement;
    pageFields: ErrorPageType = {
        errorNumber: '404',
        errorText: 'Не туда попали',
        buttonText: 'Назад к чатам',
    }

    constructor() {
        this.render();
    }

    render() {
        const element = document.createElement('div');
        element.className = 'page-404';
        element.innerHTML = this.template;
        this.element = element;
    }

    get template() {
        const _template = Handlebars.compile(tmpl);
        return _template(this.pageFields);
    }
}

const page = new Page404();
document.querySelector('#root').append(page.element);

