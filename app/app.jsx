var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

import TodoApp from 'TodoApp';
var TodoAPI = require('TodoAPI');

var actions = require('actions');
var store = require('configureStore').configure();
import LoginPage from 'LoginPage';

/* ---Fetching data from localStorage--- */
  /*var initialTodos = TodoAPI.getTodos();
  store.dispatch(actions.addTodos(initialTodos));

  store.subscribe(()=>{
    var state = store.getState();
    TodoAPI.setTodos(state.todos);
  });*/

/* --- Fetching data from external database --- */
store.dispatch(actions.getTodos());

// load foundation
$(document).foundation();

// app css
require('!style!css!sass!applicationStyles');

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/">
        <IndexRoute component={LoginPage}/>
        <Route path="todos" component={TodoApp}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
