import FormInput from '../../components/formInput';

const inputs = [
    {
        label: 'Старый пароль',
        value: '',
        name: 'oldPassword',
        type: 'password',
    },
    {
        label: 'Новый пароль',
        value: '',
        name: 'newPassword',
        type: 'password',
    },
    {
        label: 'Повторите новый пароль',
        value: '',
        name: 'submitPassword',
        type: 'password',
    },
];

import ProfilePageLayout from '../../layouts/profile/ProfilePageLayout';
import renderPage from '../../utils/renderPage';
import Button from '../../components/button';
import Form from '../../components/form';

const childrenInputs = inputs
    .map(input => new FormInput({
        ...input,
        className: 'profile-input',
    }));

const controls = [
    new Button({
        label: 'Сохранить',
    }),
];

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
