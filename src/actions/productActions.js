import axiosInstance from 'utils/fetcher';

export const loadProducts = () => async dispatch => {
  try {
    dispatch({ type: 'LOAD_PRODUCTS_REQUEST' });
    const products = await axiosInstance.get('products');
    dispatch({ type: 'LOAD_PRODUCTS_SUCCESS', payload: products });
  } catch (error) {
    dispatch({ type: 'LOAD_PRODUCTS_FAIL', payload: error });
  }
};

export const addProduct = data => async dispatch => {
  try {
    dispatch({ type: 'ADD_PRODUCTS_REQUEST' });
    const product = await axiosInstance.post('products', data);
    dispatch({ type: 'ADD_PRODUCTS_SUCCESS', payload: product });
  } catch (error) {
    dispatch({ type: 'ADD_PRODUCTS_FAIL', payload: error });
  }
};

export const updateProduct = data => async dispatch => {
  try {
    dispatch({ type: 'UPDATE_PRODUCTS_REQUEST' });
    const product = await axiosInstance.put(`products/${data.id}`, data);
    dispatch({ type: 'UPDATE_PRODUCTS_SUCCESS', payload: product });
  } catch (error) {
    dispatch({ type: 'UPDATE_PRODUCTS_FAIL', payload: error });
  }
};

export const deleteProduct = data => async dispatch => {
  try {
    dispatch({ type: 'DELETE_PRODUCTS_REQUEST' });
    await axiosInstance.delete(`products/${data.id}`);
    dispatch({ type: 'DELETE_PRODUCTS_SUCCESS', payload: data });
  } catch (error) {
    dispatch({ type: 'DELETE_PRODUCTS_FAIL', payload: error });
  }
};
