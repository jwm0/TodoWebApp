var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');
var moment = require('moment');

export var Todo = React.createClass({
  handleClick: function () {
    this.props.dispatch(actions.toggleTodo(this.props.id));
  },
  render: function () {
    var {id, text, completed, createdAt, completedAt, dispatch} = this.props;
    var todoClassName = completed ? 'todo todo-completed' : 'todo';
    var renderDate = ()=>{
      var message = 'Created: ';
      var timestamp = createdAt;
      if(completed) {
        message = 'Completed: ';
        timestamp = completedAt;
      }
      return message + moment.unix(timestamp).format('D MMM @ H:mm');
    };

    return (
      <div className={todoClassName} onClick={this.handleClick}>
        <div>
          <input type="checkbox" checked={completed} readOnly/>
        </div>
        <div>
          <p>{text}</p>
          <p className="todo-subtext">{renderDate()}</p>
        </div>
      </div>
    )
  }
});

export default connect()(Todo);
