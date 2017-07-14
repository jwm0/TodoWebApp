var $ = require('jquery');

module.exports = {
  setTodos: function (todos){
    if($.isArray(todos)){
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    }
  },
  getTodos: function () {
    var stringTodos = localStorage.getItem('todos');
    var todos = [];

    try {
      todos = JSON.parse(stringTodos);
    } catch (e) {

    }

    return $.isArray(todos) ? todos : [];

    // if ($.isArray(todos)) {
    //   return todos;
    // } else {
    //   return [];
    // }
  },
  filterTodos: function (todos, showCompleted, searchText) {
    // showCompleted
    var filteredTodos = todos;
    filteredTodos = filteredTodos.filter((todo)=>{
      return !todo.completed || showCompleted;
    });

    // sort by text
    filteredTodos = filteredTodos.filter((todo)=>{
      if(searchText == '') return true;
      else {
        return !todo.text.toLowerCase().indexOf(searchText);
      }
    });

    // sort by uncompleted first
    filteredTodos.sort((a,b)=>{
      if(!a.completed && b.completed) return -1;
      else if (a.completed && !b.completed) return 1;
      else return 0;
    });

    return filteredTodos;
  }
};
