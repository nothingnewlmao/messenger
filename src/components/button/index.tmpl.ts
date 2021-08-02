import './index.scss';

const tmpl: string = `
    <button 
        class="button {{ class }}"
        {{#if type}}
            type="{{type}}"
        {{/if}}
        >
        {{#unless icon-after}}
            <div data-component="icon"></div>            
        {{/unless}}
        {{#if label }}
            {{ label }}
        {{/if}}
        {{#if icon-after}}
            <div data-component="icon"></div>            
        {{/if}}
    </button>
`;

export default tmpl;
