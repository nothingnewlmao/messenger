import * as Handlebars from 'handlebars';
import tmpl from './index.tmpl';
import './index.scss';

export default function regFormInput() {
	const input = Handlebars.compile(tmpl);
	Handlebars.registerPartial('form-input', input);
}
