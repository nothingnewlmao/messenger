import renderTemplate from "../../utils/renderTemplate";
import tmpl from "../../layouts/error/index.tmpl";

const data = {
    errorNumber: '500',
    errorText: 'Мы уже фиксим',
    buttonText: 'Назад к чатам'
};

renderTemplate(tmpl, data, '.page-500');
