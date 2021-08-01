import Block from '../../utils/Block';
import ProfilePageType from './profilePageType';
import tmpl from './index.tmpl';

export default class ProfilePageLayout extends Block {
    constructor(ctx: ProfilePageType) {
        super('div', {
            ctx,
            tmpl,
        });
    }
}
