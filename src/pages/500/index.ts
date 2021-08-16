import ErrorPageLayout from '../../layouts/error/ErrorPageLayout';
import Button from '../../components/button';

const ctx = {
    errorNumber: '500',
    errorText: 'Мы уже фиксим',
    children: {
        button: new Button({
            label: 'Назад к чатам',
        }),
    },
};

const page500 = new ErrorPageLayout(ctx);
export default page500;
