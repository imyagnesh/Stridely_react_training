import React, { useRef, useEffect, useReducer, memo } from 'react';
import TodoFilter from 'todo/todoFilter';
import TodoForm from 'todo/todoForm';
import TodoList from 'todo/todoList';
import todoReducer, { initialState } from 'reducers/todoReducer';
import useApiCalls from 'hooks/useApiCalls';
import './style.scss';
import ErrorBoundary from 'src/components/ErrorBoundary';

const Todo = () => {
  const inputRef = useRef();
  const [{ loading, todoList, error, status }, dispatch] = useReducer(todoReducer, initialState);
  const { getData, addData, updateData, deleteData } = useApiCalls(dispatch);

  useEffect(() => {
    getData({ url: 'todoList', type: 'LOAD_TODO' });
  }, [getData]);

  const addTodo = async event => {
    event.preventDefault();
    addData({
      url: 'todoList',
      data: {
        todoText: inputRef.current.value,
        isDone: false,
        timeStamp: new Date(),
      },
      type: 'ADD_TODO',
    });
  };

  const toggleTodo = async todo => {
    updateData({
      url: `todoList/${todo.id}`,
      data: { ...todo, isDone: !todo.isDone },
      type: 'TOGGLE_TODO',
    });
  };

  const deleteTodo = async todo => {
    deleteData({
      url: `todoList/${todo.id}`,
      type: 'DELETE_TODO',
    });
  };

  const getFilteredData = () =>
    todoList.filter(todo => {
      if (status === 'pending') {
        return !todo.isDone;
      }
      if (status === 'completed') {
        return todo.isDone;
      }
      return true;
    });

  return (
    <ErrorBoundary>
      <div className="container">
        <h1>Todo App</h1>
        <TodoForm addTodo={addTodo} ref={inputRef} />
        <TodoList
          data={getFilteredData()}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
          loading={loading}
        />
        {error && (
          <div style={{ flex: 1 }}>
            <p>{error.message}</p>
            <button type="button" onClick={() => getData({ url: 'todoList', type: 'LOAD_TODO' })}>
              Retry
            </button>
          </div>
        )}
        <TodoFilter
          changeStatus={status => {
            setLoading(!loading);
            // throw new Error('something went etzsdf..');
            // this.setState({ status });
          }}
        />
      </div>
    </ErrorBoundary>
  );
};

export default memo(Todo);

// import React, { PureComponent, createRef } from 'react';
// import './style.scss';
// import TodoFilter from './todoFilter';
// import TodoForm from './todoForm';
// import TodoList from './todoList';
// import axios from '../../utils/fetcher';

// class Todo extends PureComponent {
//   state = {
//     todoList: [],
//     status: 'all',
//     loading: false,
//     error: '',
//   };

//   inputRef = createRef();

//   constructor(props) {
//     super(props);
//     this.addTodo = this.addTodo.bind(this);
//   }

//   componentDidMount() {
//     this.fetchTodoList();
//   }

//   static getDerivedStateFromError(error) {
//     this.setState({
//       error,
//     });
//   }

//   componentDidCatch(error, info) {
//     console.error('error', error);
//     console.info('info', info);
//   }

//   fetchTodoList = async () => {
//     try {
//       this.setState({ loading: true });
//       const res = await axios.get('todoList');
//       this.setState({
//         todoList: res.data,
//         loading: false,
//         error: '',
//       });
//     } catch (error) {
//       this.setState({
//         error,
//         loading: false,
//       });
//     }
//   };

//   toggleTodo = async todo => {
//     try {
//       this.setState({ loading: true });
//       const res = await axios.put(`todoList/${todo.id}`, { ...todo, isDone: !todo.isDone });
//       const { todoList } = this.state;
//       const index = todoList.findIndex(x => x.id === todo.id);
//       this.setState({
//         todoList: [...todoList.slice(0, index), res.data, ...todoList.slice(index + 1)],
//         loading: false,
//         error: '',
//       });
//     } catch (error) {
//       this.setState({
//         error,
//         loading: false,
//       });
//     }
//   };

//   deleteTodo = async todo => {
//     try {
//       this.setState({ loading: true });
//       await axios.delete(`todoList/${todo.id}`);
//       const { todoList } = this.state;
//       const index = todoList.findIndex(x => x.id === todo.id);
//       this.setState({
//         todoList: [...todoList.slice(0, index), ...todoList.slice(index + 1)],
//         loading: false,
//         error: '',
//       });
//     } catch (error) {
//       this.setState({
//         error,
//         loading: false,
//       });
//     }
//   };

//   getFilteredData = () => {
//     const { todoList, status } = this.state;
//     return todoList.filter(todo => {
//       if (status === 'pending') {
//         return !todo.isDone;
//       }
//       if (status === 'completed') {
//         return todo.isDone;
//       }
//       return true;
//     });
//   };

//   addTodo = async event => {
//     try {
//       event.preventDefault();
//       this.setState({ loading: true });
//       const res = await axios.post('todoList', {
//         todoText: this.inputRef.current.value,
//         isDone: false,
//         timeStamp: new Date(),
//       });

//       const { todoList } = this.state;
//       this.setState(
//         {
//           todoList: [res.data, ...todoList],
//           status: 'all',
//           loading: false,
//           error: '',
//         },
//         () => {
//           this.inputRef.current.value = '';
//         },
//       );
//     } catch (error) {
//       this.setState({
//         error,
//         loading: false,
//       });
//     }
//   };

//   render() {
//     const { error, loading } = this.state;
//     return (
//       <div className="container">
//         <h1>Todo App</h1>
//         <TodoForm addTodo={this.addTodo} ref={this.inputRef} />
//         <TodoList
//           data={this.getFilteredData()}
//           toggleTodo={this.toggleTodo}
//           deleteTodo={this.deleteTodo}
//           loading={loading}
//         />
//         {error && (
//           <div style={{ flex: 1 }}>
//             <p>{error.message}</p>
//             <button type="button" onClick={this.fetchTodoList}>
//               Retry
//             </button>
//           </div>
//         )}
//         <TodoFilter
//           changeStatus={status => {
//             // throw new Error('something went etzsdf..');
//             // this.setState({ status });
//           }}
//         />
//       </div>
//     );
//   }
// }

// export default Todo;
