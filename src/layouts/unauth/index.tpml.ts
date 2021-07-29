import './index.scss';
import regInput from '../../components/formInput';
import regButton from '../../components/button';

regInput();
regButton();

const template: string = `
    <div class="unauth__layout">
        <div class="unauth__card">
            <div class="unauth__title">{{ formTitle }}</div>
            <form>
                {{#each fields}}
                    {{> form-input class="unauth-input" }}
                {{/each}}
                {{> button 
                    label=submitBtn.label 
                    class="_general _primary"
                    type="submit"
                    }}
            </form>        
            <div class="controls">
                {{> button 
                    label=altBtn.label 
                    class="_flat" 
                    }}      
            </div> 
        </div>
    </div>
`;

export default template;
