import inputs from '../userData';
import './index.scss';
import ProfilePageLayout from '../../layouts/profile/ProfilePageLayout';
import renderPage from '../../utils/renderHelpers/renderPage';
import Button from '../../components/button';
import FormInput from '../../components/formInput';
import Form from '../../components/form';

const controls = [
    new Button({
        label: 'Изменить данные',
        className: '_flat',
    }),
    new Button({
        label: 'Изменить пароль',
        className: '_flat',
    }),
    new Button({
        label: 'Выйти',
        className: '_flat _negative',
    }),
];

const childrenInputs = inputs
    .map(input => new FormInput({
        ...input,
        className: 'profile-input',
    }));
const ctx = {
    children: {
        form: new Form({
            children: {
                inputs: childrenInputs,
            },
        }),
        controls,
    },
};
const showProfilePage = new ProfilePageLayout(ctx);
renderPage(showProfilePage);
