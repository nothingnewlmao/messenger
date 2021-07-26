const inputs = {
    email:{
            label: 'Почта',
            value: 'pochta@yandex.ru',
            name: 'email',
            type: 'email',
            readonly: true
        },
    login: {
            label: 'Логин',
            value: 'ivanivanov',
            name: 'login',
            readonly: true
        },
    first_name: {
            label: 'Имя',
            value: 'Иван',
            name: 'first_name',
            readonly: true
        },
    second_name: {
            label: 'Фамилия',
            value: 'Иванов',
            name: 'second_name',
            readonly: true
        },
    display_name: {
            label: 'Имя в чате',
            value: 'Иван',
            name: 'display_name',
            readonly: true
        },
    phone: {
            label: 'Телефон',
            value: '+7 (909) 967 30 30',
            name: 'phone',
            type: 'phone',
            readonly: true
        },
};

export default inputs;
