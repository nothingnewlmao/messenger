import Button from '../../components/button';

const ctx = {
    errorNumber: '404',
    errorText: 'Не туда попали',
    children: {
        button: new Button({
            label: 'Назад к чатам',
            className: '_flat',
        }),
    },
};

export default ctx;
