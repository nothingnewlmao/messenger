import ErrorPageLayout from '../../layouts/error/errorPage';

const fields = {
    errorNumber: '404',
    errorText: 'Не туда попали',
    buttonText: 'Назад к чатам',
};

const page = new ErrorPageLayout(fields);
document.querySelector('#root').append(page.element);
