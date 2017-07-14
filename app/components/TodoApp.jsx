var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      todos: [
        {
          id: 1,
          text: 'Sample #1'
        },
        {
          id: 2,
          text: 'Sample #2'
        },
        {
          id: 3,
          text: 'Sample #3'
        }
      ]
    };
  },
  handleNewTodo: function (text) {
    alert('New todo: ' + text);
  },
  render: function () {
    var {todos} = this.state;

    return (
      <div>
        <TodoList todos={todos}/>
        <AddTodo onNewTodo={this.handleNewTodo}/>
      </div>
    )
  }
});

module.exports = TodoApp;
