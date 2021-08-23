import Block from '../../utils/block/Block';
import ErrorPageType from './errorPageType';
import tmpl from './index.tmpl';
import './index.scss';
import router from '../../router';

export default class ErrorPageLayout extends Block {
    constructor(ctx: ErrorPageType) {
        super('div', {
            ctx: {
                ...ctx,
                className: 'error-page',
            },
            tmpl,
        });

        this.addEventListeners();
    }

    addEventListeners() {
        super.addEventListeners();

        const {button} = this.props.ctx.children;
        button.getContent().addEventListener('click', this.goToLogin);
    }

    goToLogin = (event: Event) => {
        event.preventDefault();
        router.go('/');
    }
}
