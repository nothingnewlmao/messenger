import ErrorPageLayout from '../../layouts/error/ErrorPageLayout';
import renderPage from '../../utils/renderPage';

const ctx = {
    errorNumber: '500',
    errorText: 'Мы уже фиксим',
    buttonText: 'Назад к чатам',
};

const page500 = new ErrorPageLayout(ctx);
renderPage(page500);
