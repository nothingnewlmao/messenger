import Block from '../../utils/Block';
import Button from '../../components/button';
import renderPage from '../../utils/renderPage';
import tmpl from '../../layouts/error/index.tmpl';
import '../../layouts/error/index.scss';

const ctx = {
    errorNumber: '404',
    errorText: 'Не туда попали',
    children: {
        button: new Button({
            label: 'Назад к чатам',
            events: {
                click: () => {
                    console.log('click!');
                },
            },
        }),
    },
};

const page404 = new Block('div', {
    ctx,
    tmpl,
    wrapperClass: 'error-page',
});
renderPage(page404);
