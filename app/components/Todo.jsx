var React = require('react');
var moment = require('moment');

var Todo = React.createClass({
  handleClick: function () {
    this.props.onToggle(this.props.id);
  },
  render: function () {
    var {id, text, completed, createdAt, completedAt} = this.props;
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

module.exports = Todo;
