import './index.scss';

const tmpl: string = `
    <div class="error__layout">
        <div class="error__number">
            {{ error_number }}
        </div>
        <div class="error__text">{{ error_text }}</div>
        <a href="/login">{{ button_text }}</a>        
    </div>
`;

export default tmpl;
