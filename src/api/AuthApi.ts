import HTTPTransport from '../utils/HTTPTransport/HTTPTransport';
import BasicAPI from './BasicAPI';
import ObjectLiteral from '../types/ObjectLiteral';

const BaseUrl = 'https://ya-praktikum.tech/api/v2';

const authAPIInstance = new HTTPTransport(BaseUrl);

export default class AuthApi extends BasicAPI {
    signup(data: any = {}) {
        return authAPIInstance
            .post('/auth/signup', {data})
            .then((response: any) => {
                console.log(response);
            })
            .catch(err => {
                console.error(err);
            });
    }

    signin(data: ObjectLiteral = {}) {
        return authAPIInstance.post('auth/signin', {data});
    }

    logout() {
        return authAPIInstance.post('/auth/logout');
    }

    request() {
        return authAPIInstance.get('/auth/user');
    }
}
