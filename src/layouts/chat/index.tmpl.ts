import './index.scss';

const tmpl: string = `
    <div class="chat__layout">
        <aside>
            <div class="aside__header">
                <div data-component="newChatBtn"></div>
                <div style="width: 100%;"></div>
                <div data-component="profileBtn"></div>
            </div>
            {{#if children.chatList}}
                <div class="aside__chat-list">
                    {{#each children.chatList}}
                       <div
                        data-component="chatList"
                        data-key="{{@index}}"
                        ></div>
                    {{/each}}
                </div>    
            {{else}}
            <div class="aside__stub">У Вас пока нет чатов. Давайте создадим беседу!</div>
            {{/if}}
        </aside>
        <main>
            <div class="chat__header">
                {{#if chatId}}
                    <div class="chat__params">
                        <div class="chat__icon">
                            {{#if chatAvatar}}
                                <img src={{chatAvatar}} alt="">
                            {{/if}}
                        </div>
                        <div class="chat__name">{{ chatTitle }}</div>
                    </div>
                    <div data-component="addUserBtn"></div>
                {{/if}}
            </div>
            <div class="chat__content">
                {{#if children.messages}}
                    {{#each children.messages}}
                        <div
                            data-component="messages"
                            data-key="{{@index}}"
                            ></div>
                    {{/each}}
                {{else}}
                    <div>Пока нет сообщений.</div>
                {{/if}}
            </div>
            <div class="chat__create">
                <div data-component="newMessageFiles"></div>
                <div data-component="newMessageInput"></div>
                <div data-component="sendMessage"></div>
            </div>
        </main>
        <div data-component="createChatPopup"></div>
        <div data-component="addUserPopup"></div> 
    </div> 
`;

export default tmpl;
