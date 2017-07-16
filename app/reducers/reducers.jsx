export var searchTextReducer = (state='', action) =>{
  switch(action.type){
    case 'SET_SEARCH_TEXT':
      return action.searchText;
    default:
      return state;
  }
}

export var showCompletedReducer = (state = {showCompleted: false}, action) =>{
  switch(action.type){
    case 'TOGGLE_SHOW_COMPLETED':
      return {
        showCompleted: !state.showCompleted
      }
    default:
      return state;
  }
}
