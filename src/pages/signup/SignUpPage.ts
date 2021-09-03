import Block from '../../utils/block/Block';
import UnauthPageType from '../../layouts/unauth/unauthPageType';
import tmpl from '../../layouts/unauth/index.tpml';
import merge from '../../utils/functions/merge';
import ObjectLiteral from '../../types/ObjectLiteral';
import SignupController from './controllers/signupController';

const signUpController = new SignupController();

export default class SignUpPage extends Block {
    constructor(ctx: UnauthPageType) {
        super('div', {
            ctx: {
                ...ctx,
                className: 'unauth',
            },
            tmpl,
        });

        this.addEventListeners();
    }

    addEventListeners() {
        super.addEventListeners();

        const {form} = this.props.ctx.children;
        form.getContent().addEventListener('fields-collected', this.handleSubmitForm);
    }

    handleSubmitForm = async (event: CustomEvent) => {
        const {data} = event.detail;
        const {form} = this.props.ctx.children;
        const error = await signUpController.signup(data);

        const newProp: ObjectLiteral = {
            ctx: {
                error: error ? error : null,
            },
        };
        const newProps = merge(form.props, newProp);
        form.setProps(newProps);
    }
}
