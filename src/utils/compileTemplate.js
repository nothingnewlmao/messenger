import Handlebars from 'handlebars';

export default function compileTemplate(template, ctx, div) {
    const _template = Handlebars.compile(template);
    document.querySelector(div).innerHTML = _template(ctx);
}
