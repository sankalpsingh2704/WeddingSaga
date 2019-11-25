import Login from '../pages/login.jsx';
import Home from '../pages/home.jsx';
import PageNotFound from '../pages/PageNotFound.jsx';
import Wedding from '../pages/wedding.jsx';

const routes = [
    {
        path:'/',
        name:"Wedding",
        exact: true,
        component: Wedding
    },
    {
        path:'Home/',
        name:"Home",
        exact: true,
        component: Home
    },
    {
        path:'/login',
        name:"Login",
        exact: false,
        component: Login
    },
    {
        path: null,
        name:"Not Found",
        exact: true,
        component: Wedding
    }
];

export default routes;