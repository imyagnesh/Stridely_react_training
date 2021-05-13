import React, { PureComponent, createRef } from 'react';
import './style.scss';
import TodoFilter from './todoFilter';
import TodoForm from './todoForm';
import TodoList from './todoList';
import axios from '../../utils/fetcher';

class Todo extends PureComponent {
  state = {
    todoList: [],
    status: 'all',
    error: '',
  };

  inputRef = createRef();

  constructor(props) {
    super(props);
    this.addTodo = this.addTodo.bind(this);
  }

  componentDidMount() {
    this.fetchTodoList();
  }

  fetchTodoList = async () => {
    try {
      const res = await axios.get('todoList');
      this.setState({
        todoList: res.data,
      });
    } catch (error) {
      //   this.setState({
      //     error: error.message,
      //   });
    }
  };

  toggleTodo = async todo => {
    try {
      const res = await axios.put(`todoList/${todo.id}`, { ...todo, isDone: !todo.isDone });
      const { todoList } = this.state;
      const index = todoList.findIndex(x => x.id === todo.id);
      this.setState({
        todoList: [...todoList.slice(0, index), res.data, ...todoList.slice(index + 1)],
      });
    } catch (error) {}
  };

  deleteTodo = async todo => {
    try {
      await axios.delete(`todoList/${todo.id}`);
      const { todoList } = this.state;
      const index = todoList.findIndex(x => x.id === todo.id);
      this.setState({
        todoList: [...todoList.slice(0, index), ...todoList.slice(index + 1)],
      });
    } catch (error) {}
  };

  getFilteredData = () => {
    const { todoList, status } = this.state;
    return todoList.filter(todo => {
      if (status === 'pending') {
        return !todo.isDone;
      }
      if (status === 'completed') {
        return todo.isDone;
      }
      return true;
    });
  };

  addTodo = async event => {
    try {
      event.preventDefault();
      const res = await axios.post('todoList', {
        todoText: this.inputRef.current.value,
        isDone: false,
        timeStamp: new Date(),
      });

      const { todoList } = this.state;
      this.setState(
        {
          todoList: [res.data, ...todoList],
          status: 'all',
        },
        () => {
          this.inputRef.current.value = '';
        },
      );
    } catch (error) {}
  };

  render() {
    console.log('main index page');
    return (
      <div className="container">
        <h1>Todo App</h1>
        <TodoForm addTodo={this.addTodo} ref={this.inputRef} />
        <TodoList
          data={this.getFilteredData()}
          toggleTodo={this.toggleTodo}
          deleteTodo={this.deleteTodo}
        />
        <TodoFilter changeStatus={status => this.setState({ status })} />
      </div>
    );
  }
}

export default Todo;
