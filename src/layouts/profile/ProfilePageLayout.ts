import CreateLayout from '../CreateLayout';
import ProfilePageType from './profilePageType';
import tmpl from './index.tmpl';

export default class ProfilePageLayout extends CreateLayout {
    constructor(ctx: ProfilePageType) {
        super(tmpl, ctx);
    }
}
