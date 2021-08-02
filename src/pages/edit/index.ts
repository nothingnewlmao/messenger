import inputs from '../userData';
import ProfilePageLayout from '../../layouts/profile/ProfilePageLayout';
import renderPage from '../../utils/renderPage';
import Button from '../../components/button';
import FormInput from '../../components/formInput';
import Form from '../../components/form';
import formHandler from '../../utils/formHandler';

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
const editProfilePage = new ProfilePageLayout(ctx);
renderPage(editProfilePage);
