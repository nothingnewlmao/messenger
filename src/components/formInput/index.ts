import * as Handlebars from 'handlebars';
import tmpl from './index.tmpl';
import './index.scss';

export default function regInput() {
    const input = Handlebars.compile(tmpl);
    Handlebars.registerPartial('form-input', input);
}
