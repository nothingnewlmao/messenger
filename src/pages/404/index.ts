import renderTemplate from '../../utils/renderTemplate';
import tmpl from '../../layouts/error/index.tmpl';

const data = {
    errorNumber: '404',
    errorText: 'Не туда попали',
    buttonText: 'Назад к чатам',
};

renderTemplate(tmpl, data, '.page-404');
