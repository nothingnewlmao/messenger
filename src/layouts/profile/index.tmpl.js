import regProfileInput from "../../components/profileInput";
import regButton from "../../components/button";
import './index.scss';

regProfileInput();
regButton();

const tmpl = `
    <div class="user-profile">
        <aside>
            {{> 
                button 
                class='round' 
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
                        {{ inputs.display_name.value }}
                    </div>
                </div>
                <div class="profile__inputs">
                    {{#each inputs}}
                        {{> profile-input this }}
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
