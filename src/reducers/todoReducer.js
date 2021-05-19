export const initialState = {
  loading: false,
  todoList: [],
  error: '',
  status: 'all',
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'LOAD_TODO_REQUEST':
    case 'ADD_TODO_REQUEST':
    case 'TOGGLE_TODO_REQUEST':
    case 'DELETE_TODO_REQUEST':
      return { ...state, loading: true };

    case 'LOAD_TODO_SUCCESS':
      return { ...state, loading: false, error: '', todoList: payload };

    case 'ADD_TODO_SUCCESS':
      return {
        ...state,
        status: 'all',
        loading: false,
        error: '',
        todoList: [...state.todoList, payload],
      };

    case 'TOGGLE_TODO_SUCCESS': {
      const index = state.todoList.findIndex(x => x.id === payload.id);
      return {
        ...state,
        loading: false,
        error: '',
        todoList: [...state.todoList.slice(0, index), payload, ...state.todoList.slice(index + 1)],
      };
    }

    case 'DELETE_TODO_SUCCESS': {
      const index = state.todoList.findIndex(x => x.id === payload.id);
      return {
        ...state,
        loading: false,
        error: '',
        todoList: [...state.todoList.slice(0, index), ...state.todoList.slice(index + 1)],
      };
    }

    case 'LOAD_TODO_ERROR':
    case 'ADD_TODO_ERROR':
    case 'TOGGLE_TODO_ERROR':
    case 'DELETE_TODO_ERROR':
      return { ...state, loading: false, error: payload };

    default:
      return state;
  }
};
