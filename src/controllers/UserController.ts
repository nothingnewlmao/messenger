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

    public async changeUserProfile(event: CustomEvent) {
        try {
            const {data} = event.detail;
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

    public async changeAvatar(event) {
        try {
            event.preventDefault();
            const {target} = event;

            const imgInput = target.querySelector('input[type="file"]');
            const [file] = imgInput.files;

            const formData: FormData = new FormData();
            formData.append('avatar', file);
            await userApiInstance.changeAvatar(formData);

            const src = URL.createObjectURL(file);
            const img = document.querySelector('.profile__pic img');
            img.setAttribute('src', src);
            img.removeAttribute('hidden');

            const popup = target.closest('.popup');
            popup.style.display = 'none';
        } catch (e) {
            console.log(e);
        }
    }
}

export default UserController;