import ObjectLiteral from '../../../types/ObjectLiteral';
import AuthApi from '../../../api/AuthApi';
import router from '../../../router';

const signUpInstance = new AuthApi();

export default class SignupController {
    public async signup(data: ObjectLiteral) {
        try {
            await signUpInstance.signup(JSON.stringify(data));
            router.go('/messenger');
        } catch (e) {
            const errorMessage = JSON.parse(e.message).reason;
            return errorMessage;
        }
    }
}
