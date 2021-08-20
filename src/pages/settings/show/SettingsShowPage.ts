import Block from '../../../utils/block/Block';
import tmpl from '../../../layouts/settings/index.tmpl';
import ObjectLiteral from '../../../types/ObjectLiteral';
import UserController from '../../../controllers/UserController';

import FormInput from '../../../components/formInput';
import deepClone from '../../../utils/functions/deepClone';
import setProperty from '../../../utils/functions/setProperty';

export default class SettingsShowPage extends Block {
    constructor(ctx: ObjectLiteral) {
        super('div', {
            ctx: {
                ...ctx,
                className: 'user-profile',
            },
            tmpl,
        });

        this.componentDidMount();
    }

    async componentDidMount() {
        super.componentDidMount();
        const userController = new UserController();
        const info = await userController
            .getUserInfo()
            .then(response => JSON.parse(response));
        this.mapInputsValues(info);
    }

    mapInputsValues(valuesObject: ObjectLiteral) {
        const {inputs} = this.props.ctx.children.form.props.ctx.children;
        inputs.forEach((input: FormInput) => {
            const propsClone = deepClone(input.props);
            const {name: inputName} = input.props.ctx;
            setProperty(propsClone, 'ctx.value', valuesObject[inputName]);
            input.setProps(propsClone);
        });
    }
}