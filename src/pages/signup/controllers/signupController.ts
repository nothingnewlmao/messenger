import ObjectLiteral from '../../../types/ObjectLiteral';
import AuthApi from '../../../api/AuthApi';
import router from '../../../router';
import UserController from '../../settings/show/controllers/UserController';

const signUpInstance = new AuthApi();
const userController = new UserController();

export default class SignupController {
    public async signup(data: ObjectLiteral) {
        try {
            await signUpInstance
                .signup(JSON.stringify(data))
                .then(async () => {
                    await userController.getUserInfo();
                });

            router.go('/messenger');
        } catch (e) {
            console.log(JSON.parse(e.message));
        }
    }
}
