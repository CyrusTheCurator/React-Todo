import React from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const Todo = props => {
  return (
    <>
      <TodoForm
        state={props.state}
        setState={props.setState}
        handleInputChange={props.handleInputChange}
        handleButton={props.handleButton}
        clearAll={props.clearAll}
      />
      <TodoList
        state={props.state}
        setState={props.setState}
        handleItemClick={props.handleItemClick}
      />
    </>
  );
};

export default Todo;
