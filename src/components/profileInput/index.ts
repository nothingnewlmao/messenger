import * as Handlebars from 'handlebars';
import tmpl from './index.tmpl';
import './index.scss';

export default function regProfileInput() {
	const input = Handlebars.compile(tmpl);
	Handlebars.registerPartial('profile-input', input);
}
