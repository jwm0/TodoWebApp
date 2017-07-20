var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var AddTodo = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();
    var text = this.refs.todoText.value;

    if(text !== ''){
      this.refs.todoText.value = '';
      this.props.dispatch(actions.newAddTodo(text));
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

export default connect()(AddTodo);
