var expect = require('expect');
var actions = require('actions');

describe('Actions',()=>{
  it('should generate search text action',()=>{
    var action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'test'
    }
    var res = actions.setSearchText('test');
    expect(res).toEqual(action);
  });

})
