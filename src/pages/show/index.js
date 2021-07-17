import tmpl from '../../layouts/profile/index.tmpl';
import renderTemplate from "../../utils/renderTemplate";
import inputs from '../userData';
import './index.scss';

const controls = [
    {
        label: 'Изменить данные',
        class: '_flat'
    },
    {
        label: 'Изменить пароль',
        class: '_flat'
    },
    {
        label: 'Выйти',
        class: '_flat _negative'
    }
];
const render_data = { inputs, controls };

renderTemplate(tmpl, render_data, '#root');
