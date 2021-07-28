import ErrorPageLayout from '../../layouts/error/errorPage';
import renderPage from '../../utils/renderPage';

const fields = {
    errorNumber: '500',
    errorText: 'Мы уже фиксим',
    buttonText: 'Назад к чатам',
};

const page = new ErrorPageLayout(fields);
renderPage(page);
