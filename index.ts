import router from './src/router';

const div = document.createElement('div');
div.className = 'app';
document.body.appendChild(div);

// @ts-ignore
window.router = router;

router.start();
