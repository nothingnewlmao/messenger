import regIcon from '../icon';
import './index.scss';

regIcon();

const tmpl: string = `
    <button 
        class="button {{ class }}"
        {{#if type}}
            type="{{type}}"
        {{/if}}
        >
        {{#unless icon-after}}
            {{> icon id=icon size=icon-size}}            
        {{/unless}}
        {{#if label }}
            {{ label }}
        {{/if}}
        {{#if icon-after}}
            {{> icon id=icon size=icon-size }}            
        {{/if}}
    </button>
`;

export default tmpl;
