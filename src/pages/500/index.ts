import Button from '../../components/button';

const ctx = {
    errorNumber: '500',
    errorText: 'Мы уже фиксим',
    children: {
        button: new Button({
            label: 'Назад к чатам',
            className: '_flat',
        }),
    },
};

export default ctx;
