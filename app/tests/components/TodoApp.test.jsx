var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var {Provider} = require('react-redux');
var expect = require('expect');
var $ = require('jquery');

var TodoApp = require('TodoApp');
var configureStore = require('configureStore');
import TodoList from 'TodoList';

describe('TodoApp', () => {
  it('i should exist', () => {
    expect(TodoApp).toExist();
  });

  it('should render TodoList', ()=>{
    var store = configureStore.configure();
    var provider = TestUtils.renderIntoDocument(<Provider store={store}><TodoApp/></Provider>);

    var todoApp = TestUtils.scryRenderedComponentsWithType(provider, TodoApp)[0];
    var todoList = TestUtils.scryRenderedComponentsWithType(todoApp, TodoList);

    expect(todoList).toExist();
  });

});
