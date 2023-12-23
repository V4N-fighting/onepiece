import Home from '~/pages/Home';
import New from '~/pages/New';
import Upload from '~/pages/Upload';
import Profile from '~/pages/Profile';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/new', component: New },
    { path: '/upload', component: Upload, layout: null },
    { path: '/profile', component: Profile, layout: Profile },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
