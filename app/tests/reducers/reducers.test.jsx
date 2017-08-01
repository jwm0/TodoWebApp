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
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      }
      var res = reducers.showCompletedReducer(df(true), df(action));
      expect(res).toBe(false);
    });
  });

  describe('todosReducer', ()=>{
    it('should add new todo',()=>{
      var action = {
        type: 'ADD_TODO',
        todo:   {
                  id: 1,
                  text: 'todo 1',
                  completed: false,
                  createdAt: 'moment().unix()',
                  completedAt: undefined
                }
      }
      var res = reducers.todosReducer(df([]), df(action));
      expect(res.length).toBe(1);
      expect(res[0].text).toEqual(action.todo.text);
    });

    it('should update completed state',()=>{
      var state = [
        {
          id: 1,
          text: 'todo 1',
          completed: false,
          createdAt: 'moment().unix()',
          completedAt: undefined
        },
        {
          id: 2,
          text: 'todo 2',
          completed: true,
          createdAt: 'moment().unix()',
          completedAt: undefined
        }
      ];
      var updates = {
        completed: false,
        completedAt: null
      }
      var action = {
        type: 'UPDATE_TODO',
        id: '2',
        updates
      }

      var res = reducers.todosReducer(df(state), df(action));
      expect(res.length).toBe(2);
      expect(res[1].completed).toBe(false);
      expect(res[1].completedAt).toEqual(undefined);
    });

    it('should add existing todos', ()=>{
      var todos = [
        {
          id: 1,
          text: 'bla',
          completed: false,
          completedAt: undefined,
          createdAt: 500
        },
        {
          id: 2,
          text: 'blabla',
          completed: false,
          completedAt: undefined,
          createdAt: 512
        }
      ];

      var action = {
        type: 'ADD_TODOS',
        todos
      }
      var res = reducers.todosReducer(df(todos),df(action));
      expect(res.length).toBe(2);
    });
  });

  describe('authReducer',()=>{
    it('should store uid on LOGIN',()=>{
      var action = {
        type: 'LOGIN',
        uid: 'user123'
      }
      var res = reducers.authReducer(df({}),df(action));
      expect(res.uid).toEqual(action.uid);
    });

    it('should clear todos on logout',()=>{
      var todos = [
        {
          id: 1,
          text: 'bla',
          completed: false,
          completedAt: undefined,
          createdAt: 500
        },
        {
          id: 2,
          text: 'blabla',
          completed: false,
          completedAt: undefined,
          createdAt: 512
        }
      ];

      reducers.todosReducer(df(todos),df({
        type: 'ADD_TODOS',
        todos
      }));
      var action = {
        type: 'LOGOUT'
      }
      var res = reducers.todosReducer(df({}),df(action));
      expect(res).toEqual([]);
    })
  });

})
