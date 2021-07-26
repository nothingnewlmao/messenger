import regIcon from '../icon';
import './index.scss';

regIcon();

const tmpl: string = `
    <button class="button {{ class }}">
        {{# if icon}}
            {{> icon icon=icon}}
        {{/if}}
        {{ label }}
    </button>
`;

export default tmpl;
