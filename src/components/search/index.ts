import * as Handlebars from 'handlebars';
import tmpl from './index.tmpl';
import './index.scss';

export default function regSearch() {
    const search = Handlebars.compile(tmpl);
    Handlebars.registerPartial('search', search);
}
