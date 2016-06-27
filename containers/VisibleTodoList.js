import { connect } from "react-redux";
import TodoList from "../components/TodoList";
import { toggleTodo } from "../actions";

const getVisibleTodos = (state, filter) =>{
  switch(filter){
    case 'SHOW_ALL':
      return state;
    case 'SHOW_COMPLETED':
      return state.filter(t => t.completed);
    case 'SHOW_ACTIVE':
      return state.filter(t => !t.completed);
  }
};

const mapStateToPropsTodoList = (state) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  };
};

const mapDispatchToPropsTodoList = (dispatch) => {
  return {
    TodoClickItem: (id) => {
      dispatch(toggleTodo(id));
    }
  }
};

const VisibleTodoList = connect(
      mapStateToPropsTodoList,
      mapDispatchToPropsTodoList
    )(TodoList);

export default VisibleTodoList;
