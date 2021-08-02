const tmpl: string = `
    <label>
        {{ label }}
        <input 
            name="{{ name }}" 
            value="{{ value }}"
            {{#if fieldName}}
                data-input-name="{{ name }}"
            {{/if}}                 
            {{#if type}}
                type={{ type }}
            {{else}}
                type="text"
            {{/if}}
            {{#if readonly}}
                readonly
            {{/if}}>               
    </label> 
`;

export default tmpl;
