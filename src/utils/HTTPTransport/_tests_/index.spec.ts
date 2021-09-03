// import {expect} from 'chai';
// import 'mocha';
// import * as nock from 'nock';
// import HTTPTransport from '../HTTPTransport';
//
// const BASE_URL = 'https://ya-praktikum.tech/api/v2';
// const requestInstance = new HTTPTransport(BASE_URL);
//
// describe('Тестирование httpTransport', () => {
//     it('Делает запрос POST', done => {
//         const pathname = '/auth/signup';
//
//         const requestOptions = {
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             data: JSON.stringify({
//                 first_name: 'Val',
//                 second_name: 'kirs',
//                 login: 'val17',
//                 email: 'valentine17@ya.ru',
//                 password: 'p@Ssword',
//                 phone: '+791260453021',
//             }),
//         };
//
//         nock(BASE_URL)
//             .post(pathname, requestOptions)
//             .reply(200, {id: 123});
//
//         requestInstance
//             .post(pathname, requestOptions)
//             .then(result => {
//                 console.log(result);
//                 expect(result).to.be.equal({id: 123});
//                 done();
//             });
//     });
//
//     it('Делает запрос GET', done => {
//         const pathname = '/auth/login';
//
//         const requestOptions = {
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             data: JSON.stringify({
//                 login: 'val17',
//                 password: 'p@Ssword',
//             }),
//         };
//
//         nock(BASE_URL)
//             .post(pathname, requestOptions)
//             .reply(200, 'OK');
//
//         requestInstance
//             .post(pathname, requestOptions)
//             .then(res => {
//                 expect(res).to.be.equal('OK');
//                 done();
//             });
//     });
// });
