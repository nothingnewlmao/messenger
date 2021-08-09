import './index.scss';

const tmpl: string = `
    <div
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
    </div>
`;

export default tmpl;
