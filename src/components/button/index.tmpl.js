import './index.scss';
import regIcon from '../icon';

regIcon();

const tmpl = `
    <button class="button {{ class }}">
        {{# if icon}}
            {{> icon icon=icon}}
        {{/if}}
        {{ label }}
    </button>
`;

export default tmpl;
