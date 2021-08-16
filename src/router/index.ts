import Router from './Router';
import loginPage from '../pages/login';
import page404 from '../pages/404';
import page500 from '../pages/500';
import changePassword from '../pages/changePassword';
import chatPage from '../pages/chat';
import editProfilePage from '../pages/edit';
import showProfilePage from '../pages/show';
import signupPage from '../pages/signup';

const router = new Router('.app');

router
    .use('/', loginPage)
    .use('/404/', page404)
    .use('/505/', page500)
    .use('/change-password/', changePassword)
    .use('/chat/', chatPage)
    .use('/edit-profile/', editProfilePage)
    .use('/show-profile/', showProfilePage)
    .use('/signup/', signupPage);

export default router;
