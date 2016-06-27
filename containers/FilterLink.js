import React from "react";
import { connect } from "react-redux";
import TodoLink  from "../components/TodoLink";
import { setVisibilityFilter } from "../actions";

const mapStateToPropsFilter = (state, ownProps) => {
  return {
    active: (ownProps.filter === state.visibilityFilter)
  };
};
const mapDispatchToPropsFilter = (dispatch, ownProps) => {
  return {
    onFilterClick: ()=> {
       dispatch(setVisibilityFilter(ownProps.filter));
    }
  };
};

const FilterLink = connect(
      mapStateToPropsFilter,
      mapDispatchToPropsFilter
    )(TodoLink);

export default FilterLink;
