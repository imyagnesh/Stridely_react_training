// Setup
// Setup React
// Componet
// Props
// Props validation
// Function Component
// Class Component
// diff class Component and Function Component
// State & Global Storage
// Life Cycle methods
// TODO Applicaion
// Api Integration
// Hooks
// Convet Todo application using Hooks
// Testing Components

import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';

// component
// 1. First Letter should be capital
// 2. return only 1 element

// Children is default props in all components
// props is meat to pass data to component
// cant change props value

// Function Component
// const App = ({ children, name }) => (
//   <>
//     <h1>{children}</h1>
//     <h2>{name}</h2>
//     <input type="text" />
//   </>
// );

// Global data
// State is local component data

// component will re-render only when prop value change or state value change.

// Mouting
// -> constructor
// -> getDerivedStateFromProps
// -> render
// -> componentDidMount

// Updating
// -> getDerivedStateFromProps
// -> shouldComponentUpdate
// -> render
// -> getSnapshotBeforeUpdate
// -> componentDidUpdate

// Unmount
// -> componentWillUnmount

// Error
// ->
class App extends Component {
  static propTypes = {
    children: PropTypes.string.isRequired,
    name: PropTypes.string,
  };

  static defaultProps = {
    name: 'Hello',
  };

  nameRef = createRef();

  state = {
    data: 'hello from data',
  };

  constructor(props) {
    super(props);
    console.log('constructor');
    this.copyEvent = this.copyEvent.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps');
    return {
      ...state,
      nameWithGreet: `Hello ${props.name}`,
    };
  }

  copyEvent() {
    console.log('copied');
  }

  componentDidMount() {
    this.nameRef.current.style = 'color: red';
    document.addEventListener('copy', this.copyEvent);
    this.timeout = setTimeout(() => {
      console.log('sto');
    }, 5000);

    // to Fetch data
  }

  shouldComponentUpdate(nextProps, nextState) {
    // if (this.state !== nextState && this.props !== nextProps) {
    //   return true;
    // }
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    return 10;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    //   if( ) {
    //       // call api
    //   }
  }

  componentWillUnmount() {
    document.removeEventListener('copy', this.copyEvent);
    clearTimeout(this.timeout);
  }

  render() {
    console.log('render');
    const { data, nameWithGreet } = this.state;
    const { children } = this.props;
    return (
      <>
        <h1 ref={this.nameRef}>{nameWithGreet}</h1>
        <h1>{children}</h1>
        <h1>{data}</h1>
        <button
          type="button"
          onClick={() => {
            this.setState({
              data: 'Hello chnaged data',
            });
            // data = 'Hello chnaged data';
          }}
        >
          Click Me
        </button>
      </>
    );
  }
}

// App.propTypes = {
//   children: PropTypes.string.isRequired,
//   name: PropTypes.string,
// };

// App.defaultProps = {
//   name: 'Hello',
// };

export default App;
