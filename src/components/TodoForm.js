import React from "react";
import Todo from "./Todo";

const TodoForm = props => {
  return (
    <>
      <h2>you are about to add: {props.state.newItem.name}</h2>
      <input
        onChange={props.handleInputChange}
        value={props.state.newItem.name}
      />

      <button onClick={props.handleButton}>
        PRESS THIS TO ADD YOUR TODO!!!
      </button>

      <button onClick={props.clearAll}>Press here to clear all items</button>
    </>
  );
};

export default TodoForm;
