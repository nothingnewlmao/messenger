import Block from '../../utils/block/Block';
import ProfilePageType from './profilePageType';
import tmpl from './index.tmpl';

export default class ProfilePageLayout extends Block {
    constructor(ctx: ProfilePageType) {
        super('div', {
            ctx: {
                ...ctx,
                className: 'user-profile',
            },
            tmpl,
        });
    }
}
