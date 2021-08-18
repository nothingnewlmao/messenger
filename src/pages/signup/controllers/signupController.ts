import ObjectLiteral from '../../../types/ObjectLiteral';
import AuthApi from '../../../api/AuthApi';

const signUpInstance = new AuthApi();

export default class SignupController {
    public async signup(data: ObjectLiteral) {
        try {
            return await signUpInstance.signup(JSON.stringify(data));
        } catch (e) {
            console.log(JSON.parse(e.message));
        }
    }
}
