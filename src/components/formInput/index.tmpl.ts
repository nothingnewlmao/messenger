const tmpl: string = `
    <div class="form-input">
        <label>
            {{ label }}
            <input 
                name="{{ fieldName }}" 
                data-input-name="{{ fieldName }}" 
                type="text" >               
        </label> 
    </div>
`;

export default tmpl;
