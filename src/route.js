import About from 'pages/About';
import Home from 'pages/Home';
import Users from 'pages/Users';

export default [
  {
    key: 1,
    path: '/',
    exact: true,
    label: 'Home',
    component: Home,
  },
  {
    key: 2,
    path: '/about',
    label: 'About',
    component: About,
  },
  {
    key: 3,
    path: '/users',
    exact: true,
    label: 'Users',
    component: Users,
  },
];
