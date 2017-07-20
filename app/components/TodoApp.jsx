//var uuid = require('node-uuid');

import React from 'react';
import * as Redux from 'react-redux';

import TodoList from 'TodoList'
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';
import * as actions from 'actions';

var TodoApp = React.createClass({
  onLogout (e) {
  var {dispatch} = this.props;
  e.preventDefault();

  dispatch(actions.startLogout());
  },
  render() {
    return (
      <div>
        <div className="page-actions">
          <a href="#" onClick={this.onLogout}>Logout</a>
        </div>
        <div className="header"><h1>Todo</h1></div>
        <div className="row">
          <div className="column small-centered large-6 small-10">
            <div className="container">
              <TodoSearch/>
              <TodoList/>
              <AddTodo/>
            </div>
          </div>
        </div>
      </div>
    )
  }
});

export default Redux.connect()(TodoApp);
