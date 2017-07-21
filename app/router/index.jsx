import React from 'react';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import firebase from 'firebase';

import TodoApp from 'TodoApp';
import LoginPage from 'LoginPage';

var requireLogin = (nextState, replace, next) => {
  if (!firebase.auth().currentUser) {
    replace('/');
  }
  next();
}

var redirectLoggedIn = (nextState, replace, next) => {
  if (firebase.auth().currentUser) {
    replace('/todos');
  }
  next();
}

export default (
  <Router history={hashHistory}>
    <Route path="/">
      <IndexRoute component={LoginPage} onEnter={redirectLoggedIn}/>
      <Route path="todos" component={TodoApp} onEnter={requireLogin}/>
    </Route>
  </Router>
)
