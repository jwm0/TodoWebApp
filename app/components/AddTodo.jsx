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
      <div className="rows">
        <form className="column medium-3 small-centered" onSubmit={this.onFormSubmit}>
          <input ref="todoText" type="text" placeholder="Enter a new Todo!"/>
          <button className="button hollow expanded">Add Todo</button>
        </form>
      </div>
    )
  }
});

module.exports = AddTodo;
