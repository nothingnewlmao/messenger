import * as Handlebars from 'handlebars';

export default function renderTemplate(template: string, ctx: Object, selector: string) {
    const _template = Handlebars.compile(template);
    // eslint-disable-next-line no-undef
    document.querySelector(selector).innerHTML = _template(ctx);
}
