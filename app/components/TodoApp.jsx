var React = require('react');
var uuid = require('node-uuid');

// var TodoList = require('TodoList');
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';
var moment = require('moment');

//import TodoSearch from 'TodoSearch';

var TodoApp = React.createClass({
  render: function () {
    return (
      <div>
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

module.exports = TodoApp;
