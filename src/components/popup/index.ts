import Block from '../../utils/block/Block';
import ObjectLiteral from '../../types/ObjectLiteral';
import tmpl from './index.tmpl';
import './index.scss';

export default class Popup extends Block {
    hidePopup = () => {
        this.hide();
    }

    showPopup = () => {
        this.show();
    }

    constructor(ctx: ObjectLiteral, events = {}) {
        super('div', {
            tmpl,
            ctx: {...ctx, className: 'popup'},
            events,
        });

        this.addEventListeners();
    }

    addEventListeners() {
        super.addEventListeners();

        const bg = this.getContent().querySelector('.popup__bg');
        bg.addEventListener('click', this.hidePopup);

        this.getContent().addEventListener('showPopup', this.showPopup);
    }
}
