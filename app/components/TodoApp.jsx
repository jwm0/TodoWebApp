var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var uuid = require('node-uuid');

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      showCompleted: false,
      searchText: '',
      todos: [
        {
          id: uuid(),
          text: 'Sample #1',
          completed: false
        },
        {
          id: uuid(),
          text: 'Sample #2',
          completed: false
        },
        {
          id: uuid(),
          text: 'Sample #3',
          completed: true
        }
      ]
    };
  },
  handleNewTodo: function (text) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text: text,
          completed: false
        }
      ]
    });
  },
  handleSearch: function (showCompleted, searchText){
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    })
  },
  handleToggle: function (id) {
    var updatedTodos = this.state.todos.map((todo)=>{
      if (todo.id === id){
        todo.completed = !todo.completed;
      }
      return todo;
    });
    this.setState({todos: updatedTodos});
  },
  render: function () {
    var {todos} = this.state;

    return (
      <div className="main">
        <div className="column small-centered large-4 medium-6 small-8">
          <TodoSearch onSearch={this.handleSearch}/>
          <TodoList todos={todos} onToggle={this.handleToggle}/>
          <AddTodo onNewTodo={this.handleNewTodo}/>
        </div>
      </div>
    )
  }
});

module.exports = TodoApp;
