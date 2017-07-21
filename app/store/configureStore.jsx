import * as redux from 'redux';
var {searchTextReducer, showCompletedReducer, todosReducer, authReducer} = require('reducers');
import thunk from 'redux-thunk';

export var configure = (initialState = {}) => {
  var reducer = redux.combineReducers({
    showCompleted: showCompletedReducer,
    searchText: searchTextReducer,
    todos: todosReducer,
    auth: authReducer
  })
  var store = redux.createStore(reducer, initialState, redux.compose(
    redux.applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
}
