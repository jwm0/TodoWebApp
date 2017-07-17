var React = require('react');
import Todo from 'Todo';
var {connect} = require('react-redux');
var TodoAPI = require('TodoAPI');

export var TodoList = React.createClass({
  render: function () {
    var {todos, showCompleted, searchText} = this.props;

    var renderTodos = () => {
      todos =  TodoAPI.filterTodos(todos, showCompleted, searchText).map((todo)=>{
        return (
          <Todo key={todo.id} {...todo}/>
        )
      });

      if(todos.length == 0){
        return (
          <div className="empty-list">
            <p>No tasks for now.</p>
          </div>
        );
      } else {
        return todos;
      }
    };

    return (
      <div className="container-list">
        {renderTodos()}
      </div>
    )
  }
});

export default connect(
  (state) => {
    return state;
  }
)(TodoList);
