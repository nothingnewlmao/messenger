import renderTemplate from '../../utils/renderTemplate';
import tmpl from '../../layouts/error/index.tmpl';
import ErrorPageType from '../../layouts/error/errorPageType';

const data: ErrorPageType = {
    errorNumber: '500',
    errorText: 'Мы уже фиксим',
    buttonText: 'Назад к чатам',
};

renderTemplate(tmpl, data, '.page-500');
