
import renderTemplate from "../../utils/renderTemplate";
import tmpl from "../../layouts/error/index.tmpl";

const data = {
    error_number: '404',
    error_text: 'Не туда попали',
    button_text: 'Назад к чатам'
};

renderTemplate(tmpl, data, '.page-404');
