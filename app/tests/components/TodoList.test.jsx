var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var TodoList = require('TodoList');
var Todo = require('Todo');

describe('TodoList', () => {
  it('i should exist', () => {
    expect(TodoList).toExist();
  });

  it('should render one todo for each element in array', ()=>{
    var todos = [
      {
        id: 1,
        text: 'bla'
      },
      {
        id: 2,
        text: 'blabla'
      }
    ]

    var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
    var todoComponents = TestUtils.scryRenderedComponentsWithType(todoList,Todo);

    expect(todoComponents.length).toBe(todos.length);

  });
});
