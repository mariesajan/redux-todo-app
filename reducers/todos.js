const eachTodo = (state, action) => {
  switch(action.type){
    case 'ADD_TODO':
      return {
        id: action.id,
        item: action.item,
        completed: false
      };
    case 'TOGGLE_TODO':
       return Object.assign({}, state, {completed: !state.completed});
    default:
      return state;
  }
};

const todos = (state = [], action)=> {
  switch(action.type){
    case 'ADD_TODO':
      return [...state, eachTodo(undefined, action)];
    case 'TOGGLE_TODO':
     return state.map(item => {
      if(item.id !== action.id) {
        return item;
      }
      return eachTodo(item, action);
      });
    default:
      return state;
  }
};


export default todos;
