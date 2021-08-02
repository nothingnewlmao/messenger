import ProfilePageLayout from '../../layouts/profile/ProfilePageLayout';
import Form from '../../components/form';
import FormInput from '../../components/formInput';
import Button from '../../components/button';
import formHandler from '../../utils/formHandler';
import renderPage from '../../utils/renderPage';

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
                submitBtn: new Button({
                    label: 'Сохранить',
                    events: {
                        click: formHandler,
                    },
                }),
            },
        }),
    },
};
const showProfilePage = new ProfilePageLayout(ctx);
renderPage(showProfilePage);
