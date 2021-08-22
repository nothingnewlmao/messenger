export function createChatWS(userId: number, chatId: number, tokenValue: string = '') {
    const BASE_URL = 'wss://ya-praktikum.tech/ws/';
    const socket = new WebSocket(`${BASE_URL}chats/${userId}/${chatId}/${tokenValue}`);

    socket.addEventListener('open', () => {
        console.log('Соединение установлено');
    });

    socket.addEventListener('close', event => {
        if (event.wasClean) {
            console.log('Соединение закрыто чисто');
        } else {
            console.log('Обрыв соединения');
        }

        console.log(`Код: ${event.code} | Причина: ${event.reason}`);
    });

    socket.addEventListener('message', event => {
        console.log('Получены данные', event.data);
    });

    socket.addEventListener('error', event => {
        console.log('Ошибка', event.message);
    });

    return socket;
}
