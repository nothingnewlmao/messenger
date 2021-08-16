import Router from './Router';
import ErrorPageLayout from '../layouts/error/ErrorPageLayout';
import ProfilePageLayout from '../layouts/profile/ProfilePageLayout';
import UnauthPageLayout from '../layouts/unauth/UnauthPageLayout';

import page404 from '../pages/404';
import page500 from '../pages/500';
import changePassword from '../pages/changePassword';
import editProfilePage from '../pages/edit';
import showProfilePage from '../pages/show';
import loginPage from '../pages/login';
import signupPage from '../pages/signup';
import chatPage from '../pages/chat';

const router = new Router('.app');

router
    .use('/', UnauthPageLayout, loginPage)
    .use('/sign-up', UnauthPageLayout, signupPage)
    .use('/settings/password', ProfilePageLayout, changePassword)
    .use('/messenger', chatPage)
    .use('/settings/edit', ProfilePageLayout, editProfilePage)
    .use('/settings/show', ProfilePageLayout, showProfilePage)
    .use('/505', ErrorPageLayout, page500)
    .use('/404', ErrorPageLayout, page404);

export default router;
