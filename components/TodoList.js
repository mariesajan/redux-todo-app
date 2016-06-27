import React from "react";
import Todo from "./Todo";

const TodoList = ({
  todos,
  TodoClickItem
}) => (<ul>
  {todos.map(todo =>
       <Todo key={todo.id}
         onTodoClick= {()=>TodoClickItem(todo.id)}
         {...todo} />
   )}
 </ul>
);

export default TodoList;
