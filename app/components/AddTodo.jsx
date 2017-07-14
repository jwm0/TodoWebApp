var React = require('react');

var AddTodo = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();
    var text = this.refs.todoText.value;

    if(text !== ''){
      this.refs.todoText.value = '';
      this.props.onNewTodo(text);
    } else {
      this.refs.todoText.focus();
    }
  },
  render: function () {

    return (
      <div className="container-bottom">
        <form onSubmit={this.onFormSubmit}>
          <input ref="todoText" type="text" placeholder="Enter a new Todo!"/>
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    )
  }
});

module.exports = AddTodo;
