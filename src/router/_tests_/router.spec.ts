import {expect} from 'chai';
import 'mocha';
import {JSDOM} from 'jsdom';
import router from '../index';

// Создание окружения для тестирования роутера
declare global {
    namespace NodeJS {
        interface Global {
            document: Document;
            window: Window;
            navigator: Navigator;
        }
    }
}

const dom = new JSDOM('<!DOCTYPE html><div class="app"></div>', {
    url: 'http://localhost:3000',
});

global.document = dom.window.document;
global.window = global.document.defaultView;
// @ts-ignore
global.window.router = router;

describe('Проверяем переходы у Роута', () => {
    it('Ходит по страницам', () => {
        const historyLengthStart = window.history.length;
        window.history.pushState({page: 'sign-up'}, 'Sign-up', '/sign-up');
        const {pathname} = window.location;
        const historyIncreased = window.history.length === historyLengthStart + 1;

        expect(pathname).to.eq('/sign-up');
        expect(historyIncreased).to.eq(true);
    });

    it('При несуществующем url показывает страницу ошибки', () => {
        window.history.pushState({page: 'Unknown'}, 'Unknown', '/454646546546545');
        router.start();
        const testEl = document.querySelector('[data-test-id]');
        // @ts-ignore
        const {testId: isErrorPage} = testEl.dataset;

        expect(isErrorPage).to.eq('errorPage');
    });
});
