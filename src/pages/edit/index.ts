import inputs from '../userData';
import ProfilePageLayout from '../../layouts/profile/ProfilePageLayout';
import renderPage from '../../utils/renderHelpers/renderPage';
import Button from '../../components/button';
import FormInput from '../../components/formInput';
import Form from '../../components/form';

const childrenInputs = inputs
    .map(input => new FormInput({
        ...input,
        className: 'profile-input',
        readonly: false,
    }, {
        blur: [
            'loginCheck',
            'requiredField',
        ],
        'form-submitted': [
            'loginCheck',
            'requiredField',
        ],
    }));
const ctx = {
    children: {
        form: new Form({
            children: {
                inputs: childrenInputs,
                submitBtn: new Button({
                    label: 'Сохранить',
                }),
            },
        }, {
            click: [
                'emitSubmitEvent',
                'collectFields',
            ],
        }),
    },
};
const editProfilePage = new ProfilePageLayout(ctx);
renderPage(editProfilePage);
