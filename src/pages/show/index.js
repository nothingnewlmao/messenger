import tmpl from '../../layouts/profile/index.tmpl';
import compileTemplate from "../../utils/compileTemplate";
import inputs from '../userData';
import './index.scss';

const controls = [
    {
        label: 'Изменить данные',
        class: 'flat'
    },
    {
        label: 'Изменить пароль',
        class: 'flat'
    },
    {
        label: 'Выйти',
        class: 'flat negative'
    }
];
const render_data = { inputs, controls };

compileTemplate(tmpl, render_data, '#root');
