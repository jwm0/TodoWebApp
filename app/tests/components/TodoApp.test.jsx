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
    expect(todoApp.state.todos[0].createdAt).toBeA('number');
  });

  it('should toggle completed value when handleToggle called', ()=>{
    var todoData = {
      id: 11,
      text: 'Test',
      completed: false,
      createdAt: 0,
      completedAt: undefined
    };

    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.setState({todos: [todoData]});

    expect(todoApp.state.todos[0].completed).toBe(todoData.completed);
    todoApp.handleToggle(todoData.id);
    expect(todoApp.state.todos[0].completed).toBe(!!todoData.completed);
    expect(todoApp.state.todos[0].completedAt).toBeA('number');
  });

  it('should toggle from completed to incompleted', ()=>{
    var todoData = {
      id: 11,
      text: 'Test',
      completed: true,
      createdAt: 0,
      completedAt: 123
    };

    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.setState({todos: [todoData]});

    expect(todoApp.state.todos[0].completed).toBe(todoData.completed);
    todoApp.handleToggle(todoData.id);
    expect(todoApp.state.todos[0].completed).toBe(!!todoData.completed);
    expect(todoApp.state.todos[0].completedAt).toNotExist();
  });

});
