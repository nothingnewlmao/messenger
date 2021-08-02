export default class EventBus {
    listeners: {
        [event: string]: any[]
    };

    constructor() {
        this.listeners = {};
    }

    on(event: string, callback: () => void) {
        if (!this.listeners[event]) {
            this.listeners[event] = [];
        }

        this.listeners[event].push(callback);
    }

    off(event: string, callback: () => void) {
        if (!this.listeners[event]) {
            throw new Error(`Нет события: ${event}`);
        }

        this.listeners[event].filter(listener => listener !== callback);
    }

    emit(event: string, ...args: []) {
        if (!this.listeners[event]) {
            throw new Error(`Нет события: ${event}`);
        }

        this.listeners[event].forEach((handler: () => void) => {
            handler.apply(this, args);
        });
    }
}
