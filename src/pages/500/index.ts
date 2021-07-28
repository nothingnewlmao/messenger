import ErrorPageLayout from '../../layouts/error/errorPage';

const fields = {
    errorNumber: '500',
    errorText: 'Мы уже фиксим',
    buttonText: 'Назад к чатам',
};

const page = new ErrorPageLayout(fields);
document.querySelector('#root').append(page.element);

