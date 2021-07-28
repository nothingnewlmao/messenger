import inputs from '../userData';
import './index.scss';
import ProfilePageLayout from '../../layouts/profile/ProfilePageLayout';
import renderPage from '../../utils/renderPage';

const controls = [
    {
        label: 'Изменить данные',
        class: '_flat',
    },
    {
        label: 'Изменить пароль',
        class: '_flat',
    },
    {
        label: 'Выйти',
        class: '_flat _negative',
    },
];
const ctx = {inputs, controls};
const showProfilePage = new ProfilePageLayout(ctx);
renderPage(showProfilePage);
