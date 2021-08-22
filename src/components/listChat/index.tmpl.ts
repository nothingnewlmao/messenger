const tmpl: string = `
    <div class="chat__wrapper">
        <div class="chat__img">
        {{#if avatar}}
            <img 
                src="https://ya-praktikum.tech/api/v2/resources{{avatar}}" 
                alt="аватар">
        {{/if}}
        </div> 
        <div class="chat__body">
            <div class="chat__name">
                {{#if title}}
                    {{title}}
                {{/if}}
            </div>
            {{#if last_message}}
                <div class="chat__msg">
                    {{last_message.content}}
                </div>
            {{/if}}
        </div>
        {{#if last_message}}
            <div class="chat__params">
                {{#if last_message.time}}
                    <div class="chat__time">
                        {{last_message.time}}
                    </div>
                {{/if}}
                {{#if unread_count}}
                    <div class="chat__count">
                        {{unread_count}}
                    </div>  
                {{/if}}           
            </div>
        {{/if}}
    </div>
`;

export default tmpl;
