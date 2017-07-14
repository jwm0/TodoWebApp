var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      showCompleted: false,
      searchText: '',
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
  handleSearch: function (showCompleted, searchText){
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    })
  },
  render: function () {
    var {todos} = this.state;

    return (
      <div>
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todos={todos}/>
        <AddTodo onNewTodo={this.handleNewTodo}/>
      </div>
    )
  }
});

module.exports = TodoApp;
