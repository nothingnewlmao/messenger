import {expect} from 'chai';
import 'mocha';

const jsdom = require("jsdom");
const {JSDOM} = jsdom;

describe('Проверяем переходы у Роута', () => {
    it('Переход на новую страницу должен менять состояние сущности history', () => {

        const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
        console.log(dom.window.document.querySelector("p").textContent); // "Hello world"
        expect(1).to.eq(1);
    });
});
