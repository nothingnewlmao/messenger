import * as Handlebars from 'handlebars';
import ObjectType from '../../types/ObjectType';

export default function renderTemplate(template: string, ctx: ObjectType, selector: string) {
    const _template = Handlebars.compile(template);
    // eslint-disable-next-line no-undef
    document.querySelector(selector).innerHTML = _template(ctx);
}
