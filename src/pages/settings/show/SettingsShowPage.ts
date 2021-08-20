import Block from '../../../utils/block/Block';
import tmpl from '../../../layouts/settings/index.tmpl';
import ObjectLiteral from '../../../types/ObjectLiteral';
import UserController from '../../../controllers/UserController';

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
        const info = await userController.getUserInfo();
    }
}
