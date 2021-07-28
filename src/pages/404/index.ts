import ErrorPageLayout from '../../layouts/error/ErrorPageLayout';
import renderPage from '../../utils/renderPage';

const ctx = {
    errorNumber: '404',
    errorText: 'Не туда попали',
    buttonText: 'Назад к чатам',
};

const page404 = new ErrorPageLayout(ctx);
renderPage(page404);
