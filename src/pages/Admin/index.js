import Navigation from 'components/Navigation';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AddProduct from './AddProduct';
import ProductList from './ProductList';

const Admin = ({ routes, history }) => (
  <>
    <Switch>
      <Route path="/admin" component={ProductList} />
      <Route path="/admin/addProduct" component={AddProduct} />
    </Switch>
  </>
);

export default Admin;
