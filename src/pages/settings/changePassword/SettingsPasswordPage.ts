import Block from '../../../utils/block/Block';
import tmpl from '../../../layouts/settings/index.tmpl';
import ObjectLiteral from '../../../types/ObjectLiteral';

export default class SettingsPasswordPage extends Block {
    constructor(ctx: ObjectLiteral) {
        super('div', {
            ctx: {
                ...ctx,
                className: 'user-profile',
            },
            tmpl,
        });
    }
}
