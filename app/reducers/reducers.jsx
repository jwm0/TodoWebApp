var uuid = require('node-uuid');
var moment = require('moment');

export var searchTextReducer = (state='', action) =>{
  switch(action.type){
    case 'SET_SEARCH_TEXT':
      return action.searchText.toLowerCase();
    default:
      return state;
  }
}

export var showCompletedReducer = (state=false, action) =>{
  switch(action.type){
    case 'TOGGLE_SHOW_COMPLETED':
      return !state;
    default:
      return state;
  }
}

export var todosReducer = (state=[], action) =>{
  switch(action.type){
    case 'ADD_TODO':
      return [
        ...state,
        action.todo
      ];
    case 'ADD_TODOS':
      return action.todos;
    // case 'TOGGLE_TODO':
    //   return state.map((todo)=>{
    //     if (todo.id == action.id){
    //       return {
    //         ...todo,
    //         completed: !todo.completed,
    //         completedAt: !todo.completed ? moment().unix() : undefined
    //       }
    //     }
    //     return todo;
    //   });
    case 'UPDATE_TODO':
      return state.map((todo)=>{
        if (todo.id == action.id) {
          return {
            ...todo,
            ...action.updates
          }
        }
        return todo;
      });
    case 'REMOVE_TODO':
      return state.filter((todo)=> todo.id !== action.id);
    case 'REMOVE_COMPLETED':
      return state.filter((todo)=> todo.completed == false);
    default:
      return state;
  }
}
