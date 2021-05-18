import About from 'pages/About';
import Home from 'pages/Home';
import Login from 'pages/Login';
import Signup from 'pages/Signup';
import Users from 'pages/Users';

export default [
  {
    key: 'login',
    path: '/login',
    component: Login,
  },
  {
    key: 1,
    path: '/',
    exact: true,
    label: 'Home',
    component: Home,
    authRequire: true,
  },
  {
    key: 2,
    path: '/about',
    label: 'About',
    component: About,
    authRequire: true,
  },
  {
    key: 3,
    path: '/users',
    exact: true,
    label: 'Users',
    component: Users,
    authRequire: true,
  },
  {
    key: 4,
    path: '/signup',
    exact: true,
    component: Signup,
  },
];
