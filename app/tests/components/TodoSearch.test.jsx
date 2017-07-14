var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var TodoSearch = require('TodoSearch');

describe('TodoSearch', () => {
  it('should exist', () => {
    expect(TodoSearch).toExist();
  });

  it('should call handleSearch with valid values', () => {
    var testInput = [true, 'abc'];

    var spy = expect.createSpy();
    var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);
    var $el = $(ReactDOM.findDOMNode(todoSearch));

    todoSearch.refs.showCompleted.checked = testInput[0];
    todoSearch.refs.searchText.value = testInput[1];

    TestUtils.Simulate.change($el.find('input')[0]);
    expect(spy).toHaveBeenCalledWith(...testInput);
  });

});
