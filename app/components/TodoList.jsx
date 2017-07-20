var React = require('react');
import Todo from 'Todo';
var {connect} = require('react-redux');
var TodoAPI = require('TodoAPI');
var actions = require('actions');

export var TodoList = React.createClass({
  render: function () {
    var {todos, showCompleted, searchText, dispatch} = this.props;

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

    var renderRemoveCompleted = () => {
      var completedTodos = todos.filter((todo)=>{
        if (todo.completed) {
          return todo;
        }
      });

      if(showCompleted && completedTodos.length>0){
      return <button className="button alert expanded" onClick={()=>{
        dispatch(actions.newRemoveCompleted());
      }}>Remove completed tasks</button>;
      }
    };

    return (
      <div className="container-list">
        {renderRemoveCompleted()}
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
