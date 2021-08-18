import ObjectLiteral from '../../../types/ObjectLiteral';
import AuthApi from '../../../api/AuthApi';

const authInstance = new AuthApi();

export default class LoginController {
    public async login(data: ObjectLiteral) {
        try {
            return await authInstance.signin(JSON.stringify(data));
        } catch (e) {
            console.log(JSON.parse(e));
        }
    }
}
