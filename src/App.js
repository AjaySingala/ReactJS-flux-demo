import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from './actions/action';

import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

import './App.css';
import Service from './Service';

class App extends Component {
  render() {
    const { dispatch, visibleTodos } = this.props;

    return (
      <div className="App">
        <div>
          <AddTodo onAddClick={text => dispatch(addTodo(text))} />
          <TodoList todos={visibleTodos} />
        </div>
        <div>
          <Service />
        </div>
      </div>
    );
  }
}

function select(state) {
  return {
    visibleTodos: state.todos
  }
}
export default connect(select)(App);
