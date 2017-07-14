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

  it('should toggle completed value when handleToggle called', ()=>{
    var todoData = {
      id: 11,
      text: 'Test',
      completed: false
    };

    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.setState({todos: [todoData]});

    expect(todoApp.state.todos[0].completed).toBe(todoData.completed);
    todoApp.handleToggle(todoData.id);
    expect(todoApp.state.todos[0].completed).toBe(!!todoData.completed);
  });
});
