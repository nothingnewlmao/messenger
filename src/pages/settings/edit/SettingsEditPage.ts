import Block from '../../../utils/block/Block';
import tmpl from '../../../layouts/settings/index.tmpl';
import ObjectLiteral from '../../../types/ObjectLiteral';
import UserController from '../../../controllers/UserController';

import FormInput from '../../../components/formInput';
import deepClone from '../../../utils/functions/deepClone';
import setProperty from '../../../utils/functions/setProperty';
import EventHtmlTargetType from '../../../types/events/EventHtmlTargetType';

export default class SettingsEditPage extends Block {
    constructor(ctx: ObjectLiteral) {
        super('div', {
            ctx: {
                ...ctx,
                className: 'user-profile',
            },
            tmpl,
        });
    }

    async componentDidMount() {
        super.componentDidMount();
        const userController = new UserController();
        const info = await userController
            .getUserInfo()
            .then((response: unknown) => JSON.parse(response as string));
        this.mapInputsValues(info);
    }

    mapInputsValues(valuesObject: ObjectLiteral) {
        const {avatar} = valuesObject;
        if (avatar) {
            const img = document.querySelector('.profile__pic img');
            const src = `https://ya-praktikum.tech/api/v2/resources${avatar}`;
            img.setAttribute('src', src);
        }

        const {inputs} = this.props.ctx.children.form.props.ctx.children;
        inputs.forEach((input: FormInput) => {
            const inputPropsClone = deepClone(input.props);
            const {name: inputName} = input.props.ctx;
            setProperty(inputPropsClone, 'ctx.value', valuesObject[inputName]);
            input.setProps(inputPropsClone);
        });
    }

    addEventListeners() {
        super.addEventListeners();
        this.getContent().addEventListener('click', this.openPopup);
    }

    openPopup = (event: EventHtmlTargetType) => {
        const {target} = event;
        const isImg = target.closest('.profile__pic') !== null;
        if (isImg) {
            const {popup} = this.props.ctx.children;
            popup.show('flex');
        }
    }
}
