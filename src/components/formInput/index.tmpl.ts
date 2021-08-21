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
            {{#if accept}}
                accept={{ accept }}
            {{/if}}
            {{#if readonly}}
                readonly
            {{/if}}>
        {{#if error}}
            <span class="error-text">
                {{ error }}
            </span>
        {{/if}}                       
    </label> 
`;

export default tmpl;
