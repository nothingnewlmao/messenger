import {expect} from 'chai';
import 'mocha';
import {JSDOM} from 'jsdom';

declare global {
    namespace NodeJS {
        interface Global {
            document: Document;
            window: Window;
            navigator: Navigator;
        }
    }
}

const dom = new JSDOM('<!DOCTYPE html><p>Hello world</p>');
global.document = dom.window.document;
global.window = global.document.defaultView;

describe('Проверяем переходы у Роута', () => {
    it('Переход на новую страницу должен менять состояние сущности history', () => {
        window.history.pushState({page: 'login'}, 'Login', '/login');
        window.history.pushState({page: 'register'}, 'Register', '/signup');

        expect(window.history.length).to.eq(3);
    });
});
