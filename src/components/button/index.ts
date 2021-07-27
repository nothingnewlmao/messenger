import * as Handlebars from 'handlebars';
import tmpl from './index.tmpl';
import './index.scss';

export default function regButton(ctx = undefined) {
    const button = Handlebars.compile(tmpl, ctx);
    Handlebars.registerPartial('button', button);
}
