import regIcon from '../icon';
import './index.scss';

regIcon();


const tmpl: string = `
    <button class="button {{ class }}">
        {{#unless icon-after}}
            {{> icon id=icon}}            
        {{/unless}}
        {{#if label }}
            {{ label }}
        {{/if}}
        {{#if icon-after}}
            {{> icon id=icon}}            
        {{/if}}
    </button>
`;

export default tmpl;
