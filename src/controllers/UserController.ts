import AuthApi from '../api/AuthApi';
import router from '../router';
import UserApi from '../api/UserApi';
import ObjectLiteral from '../types/ObjectLiteral';
import EventHtmlTargetType from '../types/events/EventHtmlTargetType';

const authApiInstance = new AuthApi();
const userApiInstance = new UserApi();

class UserController {
    public async getUserInfo() {
        try {
            return await authApiInstance.getUser();
        } catch (e) {
            console.log(JSON.parse(e.message));
            router.go('/401');
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
            router.go('/401');
        }
    }

    public async changePassword(data: ObjectLiteral = {}) {
        try {
            const requestData = JSON.stringify(data);
            return await userApiInstance.changePassword(requestData);
        } catch (e) {
            console.log(e.message);
            router.go('/401');
        }
    }

    public async changeAvatar(event: EventHtmlTargetType) {
        try {
            event.preventDefault();
            const {target} = event;

            const imgInput: HTMLInputElement = target.querySelector('input[type="file"]');
            const [file] = imgInput.files;

            const formData: FormData = new FormData();
            formData.append('avatar', file);
            await userApiInstance.changeAvatar(formData);

            const src = URL.createObjectURL(file);
            const img = document.querySelector('.profile__pic img');
            img.setAttribute('src', src);
            img.removeAttribute('hidden');

            const popup: HTMLElement = target.closest('.popup');
            popup.style.display = 'none';
        } catch (e) {
            console.log(e);
            router.go('/401');
        }
    }
}

export default UserController;
