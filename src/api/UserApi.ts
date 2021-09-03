import HTTPTransport from '../utils/HTTPTransport/HTTPTransport';

const BaseUrl = 'https://ya-praktikum.tech/api/v2';

const userAPIInstance = new HTTPTransport(BaseUrl);

export default class UserApi {
    changeUser(data: string = '') {
        return userAPIInstance
            .put('/user/profile', {
                data,
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then(response => response)
            .catch(e => {
                throw new Error(e);
            });
    }

    changePassword(data: string = '') {
        return userAPIInstance
            .put('/user/password', {
                data,
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then(response => response)
            .catch(e => {
                throw new Error(e);
            });
    }

    changeAvatar(data: FormData) {
        return userAPIInstance
            .put('/user/profile/avatar', {data})
            .then(response => response)
            .catch(e => {
                throw new Error(e);
            });
    }
}
