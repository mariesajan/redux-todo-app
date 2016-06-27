import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import TodoApp from "./components/TodoApp";
import todoApps from "./reducers";

ReactDOM.render(
      <Provider store= {createStore(todoApps)}>
        <TodoApp />
      </Provider>,
         document.getElementById('root')
     );
