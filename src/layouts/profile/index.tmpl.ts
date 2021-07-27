import regInput from '../../components/formInput';
import regButton from '../../components/button';
import './index.scss';

regInput();
regButton();

const tmpl: string = `
    <div class="user-profile">
        <aside>
            {{> 
                button 
                class='_round' 
                icon="{id: 'arrow_back'}" 
                }}
        </aside>
        <main>
            <div class="profile">
                <div class="profile__display">
                    <div class="profile__pic">
                        {{#if inputs.photo}}
                            <img src="inputs.photo.src" >
                        {{else}}
                            <img src="">
                        {{/if}}
                    </div>
                    <div class="profile__name">
                        {{ inputs.displayName.value }}
                    </div>
                </div>
                <div class="profile__inputs">
                    {{#each inputs}}
                        {{> form-input class="profile-input" }}
                    {{/each}}
                </div> 
                {{#if controls}}       
                    <div class="profile__controls {{ controls_class }}">
                        {{#each controls}}
                            {{> button this}}
                        {{/each}}
                    </div>
                {{/if}}
            </div>
        </main>        
    </div>
`;

export default tmpl;
