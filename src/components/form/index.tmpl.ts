const tmpl: string = `
    <div>
        {{#each children.inputs}}
            <div 
                data-component="inputs"
                data-key="{{@index}}"
                data-class="unauth-input"
                ></div>
        {{/each}}
        <div data-component="submitBtn"></div>
    </div>
`;

export default tmpl;
