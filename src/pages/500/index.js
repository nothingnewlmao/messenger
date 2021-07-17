import renderTemplate from "../../utils/renderTemplate";
import tmpl from "../../layouts/error/index.tmpl";

const data = {
    error_number: '500',
    error_text: 'Мы уже фиксим',
    button_text: 'Назад к чатам'
};

renderTemplate(tmpl, data, '.page-500');
