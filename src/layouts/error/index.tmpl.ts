import './index.scss';

const tmpl: string = `
    <div
        class="error__layout"
        data-test-id="errorPage"
        >
        <div class="error__number">
            {{ errorNumber }}
        </div>
        <div class="error__text">{{ errorText }}</div>
        <div data-component="button"></div>        
    </div>
`;

export default tmpl;
