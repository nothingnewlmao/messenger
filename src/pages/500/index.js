import '../../styles/colors.scss';
import '../../index.scss';
import compileTemplate from "../../utils/compileTemplate";
import tmpl from "../../layouts/error/index.tmpl";

const data = {
    error_number: '500',
    error_text: 'Мы уже фиксим',
    button_text: 'Назад к чатам'
};

compileTemplate(tmpl, data, '.page-500');
