import Button from '../../components/button';

const ctx = {
    errorNumber: '401',
    errorText: 'Недостаточно прав для посещения страницы',
    children: {
        button: new Button({
            label: 'Залогиниться',
            className: '_flat',
        }),
    },
};

export default ctx;
