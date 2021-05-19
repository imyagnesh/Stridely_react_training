import Admin from 'pages/Admin';
import AddProduct from 'pages/Admin/AddProduct';
import ProductList from 'pages/Admin/ProductList';
import Home from 'pages/Home';
import Login from 'pages/Login';

export default [
  {
    path: '/',
    exact: true,
    label: 'Home',
    component: Home,
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/admin',
    exact: true,
    component: Admin,
    routes: [
      {
        path: '/admin',
        exact: true,
        component: ProductList,
      },
      {
        path: '/admin/addproduct',
        component: AddProduct,
      },
      {
        path: '/admin/updateproduct/:id',
        component: AddProduct,
      },
    ],
  },
  {
    path: '/addProduct',
    component: AddProduct,
  },
  {
    path: '/updateProduct/:id',
    component: AddProduct,
  },
];
