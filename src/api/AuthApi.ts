import HTTPTransport from '../utils/HTTPTransport/HTTPTransport';
import BasicAPI from './BasicAPI';
import ObjectLiteral from '../types/ObjectLiteral';

const BaseUrl = 'https://ya-praktikum.tech/api/v2';

const authAPIInstance = new HTTPTransport(BaseUrl);

export default class AuthApi extends BasicAPI {
    signup(data: string = '') {
        return authAPIInstance
            .post('/auth/signup', {
                data,
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then((response: ObjectLiteral): string => {
                const {id} = response;
                return id;
            });
    }

    signin(data: string = '') {
        return authAPIInstance
            .post('/auth/signin', {
                data,
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then(() => true);
    }

    logout() {
        return authAPIInstance
            .post('/auth/logout', {
                data: '',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then(() => true)
            .catch(e => {
                throw new Error(e);
            });
    }

    getUser() {
        return authAPIInstance
            .get('/auth/user')
            .then(response => response)
            .catch(e => {
                throw new Error(e);
            });
    }
}
