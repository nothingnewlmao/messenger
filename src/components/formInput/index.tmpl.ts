const tmpl: string = `
    <div class="form-input">
        <label>
            {{ label }}
            <input 
                name="{{ field_name }}" 
                data-input-name="{{ field_name }}" 
                type="text" >               
        </label> 
    </div>
`;

export default tmpl;
