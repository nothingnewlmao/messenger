const tmpl: string = `
    <span 
        {{#if class}}
            class="{{ class }} material-icons"
        {{else}}
            class="material-icons"
        {{/if}}
        >
        {{#if id}}
            {{ id }}
        {{/if}}
    </span>
`;

export default tmpl;
