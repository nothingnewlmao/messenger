import ObjectLiteral from '../../types/ObjectLiteral';
type paramsType = {
    userId: number,
    chatId: number,
    tokenValue: string,
};
// eslint-disable-next-line no-unused-vars
type onMsgFnType = (data: ObjectLiteral) => void;

export function createChatWS(params: paramsType, onMsgFn?: onMsgFnType) {
    const {
        userId,
        chatId,
        tokenValue,
    } = params;
    const BASE_URL = 'wss://ya-praktikum.tech/ws/';
    const socket = new WebSocket(`${BASE_URL}chats/${userId}/${chatId}/${tokenValue}`);

    socket.addEventListener('open', () => {
        console.log('Соединение установлено');
    });

    socket.addEventListener('close', event => {
        const {
            wasClean,
            code,
            reason,
        } = event;

        if (wasClean) {
            console.log('Соединение закрыто чисто');
        } else {
            console.log('Обрыв соединения');
        }

        console.log(`Код: ${code} | Причина: ${reason}`);
    });

    socket.addEventListener('message', event => {
        const {data} = event;

        if (onMsgFn) {
            const parsedData = JSON.parse(data);
            onMsgFn(parsedData);
        }
    });

    socket.addEventListener('error', (event: Event & { message: string }) => {
        console.log('Ошибка', event.message);
    });

    return socket;
}
