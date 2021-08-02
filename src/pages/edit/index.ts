import inputs from '../userData';
import ProfilePageLayout from '../../layouts/profile/ProfilePageLayout';
import renderPage from '../../utils/renderPage';
import Button from '../../components/button';
import FormInput from '../../components/formInput';
import Form from '../../components/form';

const controls = [
    new Button({
        label: 'Сохранить',
    }),
];

const childrenInputs = inputs
    .map(input => new FormInput({
        ...input,
        className: 'profile-input',
        readonly: false,
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
const editProfilePage = new ProfilePageLayout(ctx);
renderPage(editProfilePage);
