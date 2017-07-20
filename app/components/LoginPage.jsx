import React from 'react';
import * as redux from 'react-redux';

import * as actions from 'actions';

export var LoginPage = React.createClass({
  onLogin(){
    var {dispatch} = this.props;

    dispatch(actions.startLogin());
  },
  render() {
    return (
      <div>
        <div className="header"><h1>Todo</h1></div>
          <div className="row">
            <div className="columns small-centered small-10 medium-6 large-4">
              <div className="callout callout-auth">
               <h3>Login</h3>
               <p>Login with GitHub account below.</p>
               <button className="button" onClick={this.onLogin}>Login With GitHub</button>
              </div>
            </div>
          </div>
      </div>
    )
  }
});

export default redux.connect()(LoginPage);
