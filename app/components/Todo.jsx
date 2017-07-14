var React = require('react');

var Todo = React.createClass({
  handleClick: function () {
    this.props.onToggle(this.props.id);
  },
  render: function () {
    var {id, text, completed} = this.props;

    return (
      <div onClick={this.handleClick}>
        <input type="checkbox" checked={completed} readOnly/>
        {text}
      </div>
    )
  }
});

module.exports = Todo;
