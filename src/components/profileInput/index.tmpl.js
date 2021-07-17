const tmpl = `
    <div class="profile-input">
        <label>
            {{ label }}
            <input
                value="{{ value }}"
                name="{{ name }}"
                {{#if type}}
                    type={{ type }}
                {{/if}}
                {{#if readonly}}
                    readonly
                {{/if}}
                />
        </label>        
    </div>
`;

export default tmpl;
