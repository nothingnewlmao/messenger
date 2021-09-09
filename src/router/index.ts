import Router from './Router';
import ErrorPageLayout from '../layouts/error/ErrorPageLayout';
import LoginPage from '../pages/login/LoginPage';
import SignUpPage from '../pages/signup/SignUpPage';
import ChatPageLayout from '../layouts/chat/ChatPageLayout';
import SettingsShowPage from '../pages/settings/show/SettingsShowPage';
import SettingsEditPage from '../pages/settings/edit/SettingsEditPage';
import SettingsPasswordPage from '../pages/settings/changePassword/SettingsPasswordPage';

import page404 from '../pages/404';
import page500 from '../pages/500';
import page401 from '../pages/401';
import changePassword from '../pages/settings/changePassword';
import editProfilePage from '../pages/settings/edit';
import showProfilePage from '../pages/settings/show';
import loginPage from '../pages/login';
import signupPage from '../pages/signup';
import chatPage from '../pages/chat';

const router = new Router('.app');

router
    .use('/', LoginPage, loginPage)
    .use('/sign-up', SignUpPage, signupPage)
    .use('/messenger', ChatPageLayout, chatPage)
    .use('/settings/edit', SettingsEditPage, editProfilePage)
    .use('/settings', SettingsShowPage, showProfilePage)
    .use('/settings/password', SettingsPasswordPage, changePassword)
    .use('/505', ErrorPageLayout, page500)
    .use('/401', ErrorPageLayout, page401)
    .use('/404', ErrorPageLayout, page404);

export default router;
