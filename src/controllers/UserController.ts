import AuthApi from '../api/AuthApi';
import router from '../router';
import UserApi from '../api/UserApi';
import ObjectLiteral from '../types/ObjectLiteral';

const authApiInstance = new AuthApi();
const userApiInstance = new UserApi();

class UserController {
    public async getUserInfo() {
        try {
            return await authApiInstance.getUser();
        } catch (e) {
            console.log(JSON.parse(e.message));
        }
    }

    public async logout() {
        try {
            await authApiInstance.logout();
            router.go('/');
        } catch (e) {
            console.log(JSON.parse(e.message));
        }
    }

    public async changeUserProfile(data: ObjectLiteral = {}) {
        try {
            const requestData = JSON.stringify(data);
            return await userApiInstance.changeUser(requestData);
        } catch (e) {
            console.log(e.message);
        }
    }

    public async changePassword(data: ObjectLiteral = {}) {
        try {
            const requestData = JSON.stringify(data);
            return await userApiInstance.changePassword(requestData);
        } catch (e) {
            console.log(e.message);
        }
    }
}

export default UserController;
