import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import firebase, {firebaseRef} from 'app/firebase';
var expect = require('expect');
var actions = require('actions');

var createMockStore = configureMockStore([thunk]);

describe('Actions',()=>{
  it('should generate search text action',()=>{
    var action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'test'
    }
    var res = actions.setSearchText('test');
    expect(res).toEqual(action);
  });

  it('should generate update todo action', ()=>{
    var action = {
      type: 'UPDATE_TODO',
      id: 123,
      updates: {completed: false}
    }
    var res = actions.updateTodo(action.id, action.updates);
    expect(res).toEqual(action);
  });

  it('should generate login action object', () => {
    const action = {
      type: 'LOGIN',
      uid: '123abc'
    };
    const res = actions.login(action.uid);

    expect(res).toEqual(action);
  });

  it('should generate logout action object', () => {
    const action = {
      type: 'LOGOUT'
    };
    const res = actions.logout();

    expect(res).toEqual(action);
  });

  describe('Tests with firebase todos', ()=>{
    var testTodoRef;
    var uid;
    var todosRef;

    beforeEach((done) => {
      firebase.auth().signInAnonymously().then((user)=>{
        uid = user.uid;
        todosRef = firebaseRef.child(`users/${uid}/todos`);

        return todosRef.remove();
      }).then(()=>{
        testTodoRef = todosRef.push();
        return testTodoRef.set({
          text: 'a todo',
          completed: false,
          createdAt: 123123
        });
      })
      .then(()=>done())
      .catch(done);
    });
    afterEach((done)=>{
      todosRef.remove().then(()=>done());
    });

    it('should toggle todo and dispatch UPDATE_TODO', (done)=>{
      const store = createMockStore({auth: {uid}});
      const action = actions.newToggleTodo(testTodoRef.key, true);

      store.dispatch(action).then(()=>{
        const mockActions = store.getActions();

        expect(mockActions[0].toInclude({
          type: 'UPDATE_TODO',
          id: testTodoRef.key
        }));
        expect(mockActions[0].updates).toInclude({
          completed: true
        });
        expect(mockActions[0].updates.completedAt).toExist();
        done();
      }, done());
    });

    it('should add todos and dispatch newAddTodo', (done)=>{
      const store = createMockStore({auth: {uid}});
      const action = actions.getTodos();

      store.dispatch(action).then(()=>{
        const mockActions = store.getActions();

        expect(mockActions[0].toInclude({
          type: 'ADD_TODO',
          completed: 'false'
        }));
        expect(mockActions[0].updates.completedAt).toNotExist();
        done();
      }, done());
    });

    it('should create todo and dispatch addTodo', (done)=>{
      const store = createMockStore({auth: {uid}});
      const todoText = 'todo';

      store.dispatch(actions.newAddTodo(todoText)).then(()=>{
        const actions = store.getActions();
        expect(actions[0]).toInclude({
          type: 'ADD_TODO'
        });
        expect(actions[0].todo).toInclude({
          text: todoText
        });
        done();
      }).catch(done);
    });

  });

})
