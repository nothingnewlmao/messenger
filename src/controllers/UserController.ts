import AuthApi from '../api/AuthApi';
import router from '../router';

const authApiInstance = new AuthApi();

class UserController {
    async getUserInfo() {
        try {
            return await authApiInstance.getUser();
        } catch (e) {
            console.log(JSON.parse(e.message));
        }
    }

    async logout() {
        try {
            await authApiInstance.logout();
            router.go('/');
        } catch (e) {
            console.log(JSON.parse(e.message));
        }
    }
}

export default UserController;
