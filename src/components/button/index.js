import * as Handlebars from "handlebars";
import tmpl from './index.tmpl';

export default function regButton() {
    const button = Handlebars.compile(tmpl);
    Handlebars.registerPartial('button', button);
}