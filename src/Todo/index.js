import React, { PureComponent, createRef } from 'react';
import './style.scss';
import TodoFilter from './todoFilter';
import TodoForm from './todoForm';
import TodoList from './todoList';

class Todo extends PureComponent {
  state = {
    todoList: [],
    status: 'all',
  };

  inputRef = createRef();

  constructor(props) {
    super(props);
    this.addTodo = this.addTodo.bind(this);
  }

  toggleTodo = todo => {
    const { todoList } = this.state;
    const index = todoList.findIndex(x => x.id === todo.id);
    this.setState({
      todoList: [
        ...todoList.slice(0, index),
        { ...todo, isDone: !todo.isDone },
        ...todoList.slice(index + 1),
      ],
    });
  };

  deleteTodo = todo => {
    const { todoList } = this.state;
    const index = todoList.findIndex(x => x.id === todo.id);
    this.setState({
      todoList: [...todoList.slice(0, index), ...todoList.slice(index + 1)],
    });
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

  addTodo(event) {
    event.preventDefault();
    const { todoList } = this.state;
    this.setState(
      {
        todoList: [
          ...todoList,
          { id: new Date().valueOf(), todoText: this.inputRef.current.value, isDone: false },
        ],
        status: 'all',
      },
      () => {
        this.inputRef.current.value = '';
      },
    );
  }

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
