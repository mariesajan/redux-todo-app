import React from "react";
const TodoLink =({
  active,
  children,
  onFilterClick
}) => {
  if(active){
      return (<span>{children}</span>);
    }
  return (
    <a href="#" onClick={()=> onFilterClick()}>{children}</a>
  );
};

export default TodoLink;
