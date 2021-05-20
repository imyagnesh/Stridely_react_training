const initialState = {
  loading: false,
  data: [],
  error: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'LOAD_MANUFACTURER_REQUEST':
      return { ...state, loading: true };

    case 'LOAD_MANUFACTURER_SUCCESS':
      return { ...state, loading: false, data: payload };

    case 'LOAD_MANUFACTURER_FAIL':
      return { ...state, loading: false, error: payload };

    default:
      return state;
  }
};
