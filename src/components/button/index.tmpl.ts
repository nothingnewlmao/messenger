import './index.scss';

const tmpl: string = `
    <div
        >
        {{#unless iconAfter}}
            <div data-component="icon"></div>            
        {{/unless}}
        {{#if label }}
            {{ label }}
        {{/if}}
        {{#if iconAfter}}
            <div data-component="icon"></div>            
        {{/if}}
    </div>
`;

export default tmpl;
