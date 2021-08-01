import Block from '../../utils/Block';
import tmpl from './index.tmpl';
import './index.scss';

export default class ErrorPageLayout extends Block {
    constructor(props) {
        super('div', {
            ...props,
            wrapperClass: 'error-page',
            tmpl,
        });
    }
}
