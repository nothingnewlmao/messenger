import Handlebars from 'handlebars';

export default function renderTemplate(template, ctx, selector) {
    const _template = Handlebars.compile(template);
    document.querySelector(selector).innerHTML = _template(ctx);
}
