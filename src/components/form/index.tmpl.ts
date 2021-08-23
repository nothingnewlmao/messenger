const tmpl: string = `
    <div>
        {{#each children.inputs}}
            <div 
                data-component="inputs"
                data-key="{{@index}}"
                ></div>
        {{/each}}
        {{#if children.submitBtn}}
                <div data-component="submitBtn"></div>
        {{/if}}
        
        {{#if error}}
            <div class="_error">{{ error }}</div>
        {{/if}}
    </div>
`;

export default tmpl;
