import * as Handlebars from 'handlebars';
import tmpl from './index.tmpl';

export default function regIcon() {
    const icon = Handlebars.compile(tmpl);
    Handlebars.registerPartial('icon', icon);
}
