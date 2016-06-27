import { combineReducers } from "redux";
import todos from "./todos";
import visibilityFilter from "./visibilityFilter";

const todoApps = combineReducers({
  todos,
  visibilityFilter
});

export default todoApps;
