const initialState = {
  loading: false,
  data: [],
  error: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'LOAD_PRODUCT_TYPES_REQUEST':
      return { ...state, loading: true };

    case 'LOAD_PRODUCT_TYPES_SUCCESS':
      return { ...state, loading: false, data: payload };

    case 'LOAD_PRODUCT_TYPES_FAIL':
      return { ...state, loading: false, error: payload };

    default:
      return state;
  }
};
