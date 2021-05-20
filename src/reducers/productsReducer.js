const initialState = {
  loading: false,
  data: [],
  error: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'LOAD_PRODUCTS_REQUEST':
    case 'ADD_PRODUCTS_REQUEST':
    case 'UPDATE_PRODUCTS_REQUEST':
    case 'DELETE_PRODUCTS_REQUEST':
      return { ...state, loading: true };

    case 'LOAD_PRODUCTS_SUCCESS':
      return { ...state, loading: false, data: payload };

    case 'ADD_PRODUCTS_SUCCESS':
      return { ...state, loading: false, data: [...state.data, payload] };

    case 'UPDATE_PRODUCTS_SUCCESS': {
      const index = state.data.findIndex(x => x.id === payload.id);
      return {
        ...state,
        loading: false,
        data: [...state.data.slice(0, index), payload, ...state.data.slice(index + 1)],
      };
    }

    case 'DELETE_PRODUCTS_SUCCESS': {
      const index = state.data.findIndex(x => x.id === payload.id);
      return {
        ...state,
        loading: false,
        data: [...state.data.slice(0, index), ...state.data.slice(index + 1)],
      };
    }

    case 'LOAD_PRODUCTS_FAIL':
    case 'ADD_PRODUCTS_FAIL':
    case 'UPDATE_PRODUCTS_FAIL':
    case 'DELETE_PRODUCTS_FAIL':
      return { ...state, loading: false, error: payload };

    default:
      return state;
  }
};
