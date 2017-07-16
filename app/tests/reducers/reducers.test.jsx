var expect = require('expect');
var reducers = require('reducers');
var df = require('deep-freeze-strict');

describe('Reducers',()=>{
  describe('searchTextReducer', ()=>{
    it('should set searchText',()=>{
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'test'
      }
      var res = reducers.searchTextReducer(df(''),df(action));
      expect(res).toEqual(action.searchText);
    });
  });

  describe('showCompletedReducer', ()=>{
    it('should toggle state',()=>{
      var state = {showCompleted: true}
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      }
      var res = reducers.showCompletedReducer(df(state), df(action));
      expect(res.showCompleted).toBe(!state.showCompleted);
    });
  });

})
