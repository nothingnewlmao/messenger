import * as Handlebars from 'handlebars';
import tmpl from './index.tmpl';
import 'material-icons/iconfont/material-icons.css';

export default function regIcon() {
    const icon = Handlebars.compile(tmpl);
    Handlebars.registerPartial('icon', icon);
}
