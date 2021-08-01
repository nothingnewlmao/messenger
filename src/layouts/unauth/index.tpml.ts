import './index.scss';

const tmpl: string = `
    <div class="unauth__layout">
        <div class="unauth__card">
            <div class="unauth__title">{{ formTitle }}</div>
            <form>
                {{#each fields}}
                    <div
                        data-component="fields-input" 
                        data-component-id="{{@index}}"
                        ></div>
                {{/each}}
                <div data-component="submitBtn"></div>
            </form>        
            <div class="controls">
                {{#each controls}}
                    <div data-component="altBtn"></div>
                {{/each}}
            </div> 
        </div>
    </div>
`;

export default tmpl;
