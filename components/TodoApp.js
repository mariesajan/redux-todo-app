import React from "react";
import AddTodo from "../containers/AddTodo";
import Footer from "./Footer";
import VisibleTodoList from "../containers/VisibleTodoList";

const TodoApp = ({ store }) =>  (
      <div>
        <h2>Todo Application</h2>
        <AddTodo />
        <Footer />
        <VisibleTodoList />
      </div>
);

export default TodoApp;
