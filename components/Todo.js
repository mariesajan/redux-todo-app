import React from "react";

const Todo= ({
  completed,
  item,
  onTodoClick
})=> (
  <li
  onClick = {onTodoClick}
style = {{
         "textDecoration": completed ? "line-through" : "none"
        }}
          >{item}</li>
);

export default Todo;
