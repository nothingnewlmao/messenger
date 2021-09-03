import {expect} from 'chai';
import 'mocha';
import {JSDOM} from 'jsdom';
import Block from '../Block';

// Создание окружения для тестирования DOM
declare global {
    namespace NodeJS {
        interface Global {
            document: Document;
            window: Window;
            navigator: Navigator;
        }
    }
}

const dom = new JSDOM('<!DOCTYPE html><div class="app"></div>');
global.document = dom.window.document;

afterEach(() => {
    const appDiv = document.querySelector('.app');
    appDiv.innerHTML = '';
});

function createElement() {
    const props = {
        tmpl: '<div>content</div>',
        ctx: {
            className: 'element',
        },
    };

    return new Block('div', props);
}

function renderElement(el: Block) {
    const appDiv = document.querySelector('.app');
    appDiv.appendChild(el.getContent());
}

describe('Проверка Block', () => {
    it('Рендерит элемент', () => {
        const el = createElement();
        renderElement(el);
        const element = document.querySelector('.element');

        // eslint-disable-next-line no-unused-expressions
        expect(element).to.not.be.null;
    });

    it('Изменяет внешний вид пропсами', () => {
        const el = createElement();
        const newProps = {
            ctx: {
                className: 'element new-class-name',
            }};
        el.setProps(newProps);
        renderElement(el);

        const element = document.querySelector('.element');

        expect(element.className).to.eq('element new-class-name');
    });
});
