import firebase, {firebaseRef, githubProvider, facebookProvider} from 'app/firebase';
import moment from 'moment';

export var setSearchText = (searchText) => {
  return {
    type: 'SET_SEARCH_TEXT',
    searchText
  }
}

export var addTodo = (todo) => {
  return {
    type: 'ADD_TODO',
    todo
  }
}

export var newAddTodo = (text) => {
  return (dispatch, getState) => {
    var todo = {
      text,
      completed: false,
      createdAt: moment().unix(),
      completedAt: null
    }
    var uid = getState().auth.uid;
    var todosRef = firebaseRef.child('users/'+uid+'/todos').push(todo);

    return todosRef.then(()=>{
      todo = {
        ...todo,
        id: todosRef.key
      };
      dispatch(addTodo(todo));
    });
  }
}

export var toggleShowCompleted = () => {
  return {
    type: 'TOGGLE_SHOW_COMPLETED'
  }
}

export var addTodos = (todos) => {
  return {
    type: 'ADD_TODOS',
    todos
  }
}

export var getTodos = ()=>{
  //Object.keys();
  return (dispatch, getState) =>{
    var uid = getState().auth.uid;
    return firebaseRef.child('users/'+uid+'/todos').once('value').then((snapshot)=>{
    var parsedTodos = [];
    var todos = snapshot.val() || {};

    Object.keys(todos).forEach((id)=>{
      parsedTodos.push({
        id,
        ...todos[id]
      });
    });

    return dispatch(addTodos(parsedTodos));
  });
}
}

export var updateTodo = (id, updates) => {
  return {
    type: 'UPDATE_TODO',
    id,
    updates
  }
}

export var newToggleTodo = (id, completed) =>{
  return (dispatch, getState) => {
    var uid = getState().auth.uid;
    var todosRef = firebaseRef.child(`users/${uid}/todos/${id}`); // 'todos/' + id == `todos/${id}`
    var updates = {
      completed,
      completedAt: completed ? moment().unix() : null
    };
    todosRef.update(updates);
    return dispatch(updateTodo(id, updates));
    // return todosRef.update(updates).then(()=>{
    //   dispatch(updateTodo(id, updates));
    // });
  }
}

export var removeTodo = (id) => {
  return {
    type: 'REMOVE_TODO',
    id
  }
}

export var newRemoveTodo = (id) => {
  return (dispatch, getState) => {
    var uid = getState().auth.uid;
    firebaseRef.child(`users/${uid}/todos/${id}`).remove().then(()=>{
      dispatch(removeTodo(id));
    });
  }
};

export var removeCompleted = () => {
  return {
    type: 'REMOVE_COMPLETED'
  }
}

export var newRemoveCompleted = () =>{
  return (dispatch, getState) =>{
    var uid = getState().auth.uid;
    return firebaseRef.child(`users/${uid}/todos`).once('value').then((snapshot)=>{
    var todos = snapshot.val() || {};
    Object.keys(todos).forEach((id)=>{
      if(todos[id].completed==true){
        firebaseRef.child(`users/${uid}/todos/${id}`).remove().then(()=>{
          dispatch(removeTodo(id));
        });
      }
    });
    });
  }
}

export var startLogin = (providerName) => {
  return (dispatch, getState) => {
      if(providerName=='facebook'){
        return firebase.auth().signInWithRedirect(facebookProvider).then((result) => {
          console.log('Authorized with facebook');
        }, (error) => {
          console.log('Unable to auth', error);
        });
      } else if (providerName=='github') {
        return firebase.auth().signInWithRedirect(githubProvider).then((result) => {
          console.log('Authorized with github');
        }, (error) => {
          console.log('Unable to auth', error);
        });
      }
    };
}

export var startLogout = () => {
  return (dispatch, getState) => {
    firebase.auth().signOut();
  }
}

export var login = (uid)=>{
  return {
    type: 'LOGIN',
    uid
  }
}

export var logout = ()=>{
  return {
    type: 'LOGOUT'
  }
}
