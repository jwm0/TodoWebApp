var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {
  beforeEach(()=>{
    localStorage.removeItem('todos');
  });
  it('should exist', () => {
    expect(TodoAPI).toExist();
  });

  describe('setTodos', ()=>{
    it('should set valid todos array', ()=>{
      var todos = [{
        id: 21,
        text: 'whatever',
        completed: true
      }];

      TodoAPI.setTodos(todos);
      var actualTodos = JSON.parse(localStorage.getItem('todos'));
      expect(actualTodos).toEqual(todos);
    });

    it('should not set invalid todos array',()=>{
      var invalidData = {a: 'std'};
      TodoAPI.setTodos(invalidData);
      var actualTodos = JSON.parse(localStorage.getItem('todos'));
      expect(actualTodos).toBe(null);
    });
  });

  describe('getTodos',()=>{
    it('should not get todos when array is null',()=>{
      var actualTodos = TodoAPI.getTodos();
      expect(actualTodos).toEqual([]);
    });

    it('should get todos when data is valid',()=>{
      var todos = [{
        id: 25,
        text: 'whatever',
        completed: true
      }];
      localStorage.setItem('todos', JSON.stringify(todos));
      var actualTodos = TodoAPI.getTodos();
      expect(actualTodos).toEqual(todos);
    });
  });
});
