var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var TodoApp = require('TodoApp');

describe('TodoApp', () => {
  it('i should exist', () => {
    expect(TodoApp).toExist();
  });

  it('should render new todo when handleNewTodo is called', () => {
    var testTodo = 'test todo';
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

    todoApp.setState({todos: []});
    todoApp.handleNewTodo(testTodo);

    expect(todoApp.state.todos[0].text).toBe(testTodo);
  });
});
