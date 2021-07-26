import './index.scss';
import regFormInput from '../../components/formInput';

regFormInput();

const template: string = `
    <div class="unauth__layout">
        <div class="unauth__card">
            <div class="unauth__title">{{ formTitle }}</div>
            <form>
                {{#each fields}}
                    {{> form-input this}}
                {{/each}}
                <button class="_general _primary">
                    <a href="{{ submitBtn.onClick }}" >
                        {{ submitBtn.text }}
                    </a>
                </button>
            </form>        
            <div class="controls">
                <button class="_flat" >
                    <a href="{{ altBtn.onClick }}">
                        {{ altBtn.text }}
                    </a>
                </button>            
            </div>  
        </div>
    </div>
`;

export default template;
