import { connect } from 'react-redux';
import ProductList from './ProductList';

const mapStateToProps = ({ products, manufacturers, productTypes }) => ({
  loading: products.loading || manufacturers.loading || productTypes.loading,
  products: products.data,
  manufacturers: manufacturers.data,
  productTypes: productTypes.data,
  error: products.error || manufacturers.error || productTypes.error,
});

const mapDispatchToProps = dispatch => ({
  loadProducts: () => dispatch({ type: 'LOAD_PRODUCTS_REQUEST' }),
  updateProduct: data => dispatch({ type: 'UPDATE_PRODUCTS_REQUEST', payload: data }),
  deleteProduct: data => dispatch({ type: 'DELETE_PRODUCTS_REQUEST', payload: data }),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
