var React = require('react');
var Todo = require('Todo');

var TodoList = React.createClass({
  render: function () {
    var {todos} = this.props;

    var renderTodos = () => {
      if(todos.length == 0){
        return (
          <div className="empty-list">
            <p>No tasks for now.</p>
          </div>
        );
      }

      return todos.map((todo)=>{
        return (
          <Todo key={todo.id} {...todo} onToggle={this.props.onToggle}/>
        )
      });
    };

    return (
      <div className="container-list">
        {renderTodos()}
      </div>
    )
  }
});

module.exports = TodoList;
