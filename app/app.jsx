var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {hashHistory} = require('react-router');
import firebase from 'app/firebase'


var TodoAPI = require('TodoAPI');
var actions = require('actions');
var store = require('configureStore').configure();
import router from 'app/router/';

/* ---Fetching data from localStorage--- */
  /*var initialTodos = TodoAPI.getTodos();
  store.dispatch(actions.addTodos(initialTodos));

  store.subscribe(()=>{
    var state = store.getState();
    TodoAPI.setTodos(state.todos);
  });*/

/* --- Redirecting after login/logout --- */
firebase.auth().onAuthStateChanged((user)=>{
  if(user){
    hashHistory.push('/todos');
  } else {
    hashHistory.push('/');
  }
});

/* --- Fetching data from external database --- */
store.dispatch(actions.getTodos());

// load foundation
$(document).foundation();

// app css
require('!style!css!sass!applicationStyles');

ReactDOM.render(
  <Provider store={store}>
    {router}
  </Provider>,
  document.getElementById('app')
);
