import renderTemplate from '../../utils/renderTemplate';
import tmpl from '../../layouts/error/index.tmpl';
import ErrorPageType from '../../layouts/error/errorPageType';

const data: ErrorPageType = {
    errorNumber: '404',
    errorText: 'Не туда попали',
    buttonText: 'Назад к чатам',
};

renderTemplate(tmpl, data, '.page-404');
