import regIcon from '../icon';

regIcon();

const tmpl: string = `
    <label class="search">
        {{> 
            icon
            id="search"
            color="#999"
            }}
        <input
            type="text"
            name="search" >
    </label>
`;

export default tmpl;
