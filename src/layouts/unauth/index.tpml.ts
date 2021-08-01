import './index.scss';

const tmpl: string = `
    <div class="unauth__layout">
        <div class="unauth__card">
            <div class="unauth__title">{{ formTitle }}</div>
                <div data-component="form"></div>
            {{#if children.altBtn}}
                <div data-component="altBtn"></div>
            {{/if}}
        </div>
    </div>
`;

export default tmpl;
