import ObjectLiteral from '../../../types/ObjectLiteral';
import AuthApi from '../../../api/AuthApi';
import router from '../../../router';

const authInstance = new AuthApi();

export default class LoginController {
    public async login(data: ObjectLiteral) {
        try {
            await authInstance.signin(JSON.stringify(data));
            router.go('/messenger');
        } catch (e) {
            const errorMessage = JSON.parse(e.message).reason;
            return errorMessage;
        }
    }
}
