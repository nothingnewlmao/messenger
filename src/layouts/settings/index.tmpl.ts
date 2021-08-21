import './index.scss';

const tmpl: string = `
    <div class="user-profile">
        <aside>

        </aside>
        <main>
            <div class="profile">
                {{#if children.form}}
                    <div data-component="form"></div>
                {{/if}}
                {{#if children.controls}}       
                    <div class="profile__controls {{ controls_class }}">
                        {{#each children.controls}}
                            <div 
                                data-component="controls"
                                data-key="{{@index}}"></div>
                        {{/each}}
                    </div>
                {{/if}}
            </div>
        </main>      
        {{#if children.popup}}
            <div data-component="popup"></div>
        {{/if}}  
    </div>
`;

export default tmpl;
