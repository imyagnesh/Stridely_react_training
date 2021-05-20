import axiosInstance from 'utils/fetcher';

export const a = 1;

export const loadProductTypes = () => async dispatch => {
  try {
    dispatch({ type: 'LOAD_PRODUCT_TYPES_REQUEST' });
    const products = await axiosInstance.get('productTypes');
    dispatch({ type: 'LOAD_PRODUCT_TYPES_SUCCESS', payload: products });
  } catch (error) {
    dispatch({ type: 'LOAD_PRODUCT_TYPES_FAIL', payload: error });
  }
};
