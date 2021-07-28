import ErrorPageLayout from '../../layouts/error/errorPage';
import renderPage from '../../utils/renderPage';

const fields = {
    errorNumber: '404',
    errorText: 'Не туда попали',
    buttonText: 'Назад к чатам',
};

const page = new ErrorPageLayout(fields);
renderPage(page);
