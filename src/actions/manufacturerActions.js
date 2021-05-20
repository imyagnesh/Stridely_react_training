import axiosInstance from 'utils/fetcher';

export const a = 1;

export const loadManufacturer = () => async dispatch => {
  try {
    dispatch({ type: 'LOAD_MANUFACTURER_REQUEST' });
    const products = await axiosInstance.get('manifacturers');
    dispatch({ type: 'LOAD_MANUFACTURER_SUCCESS', payload: products });
  } catch (error) {
    dispatch({ type: 'LOAD_MANUFACTURER_FAIL', payload: error });
  }
};
