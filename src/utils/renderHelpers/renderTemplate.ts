import * as Handlebars from 'handlebars';
import ObjectLiteral from '../../types/ObjectLiteral';

export default function renderTemplate(template: string, ctx: ObjectLiteral, selector: string) {
    const _template = Handlebars.compile(template);
    // eslint-disable-next-line no-undef
    document.querySelector(selector).innerHTML = _template(ctx);
}
