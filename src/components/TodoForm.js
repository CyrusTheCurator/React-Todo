import React from "react";

const TodoForm = props => {
  return (
    <>
      <h2>you are about to add: {props.state.newItem.name}</h2>
      <input
        onChange={props.handleInputChange}
        value={props.state.newItem.name}
      />

      <button className="button" onClick={props.handleButton}>
        Add Item{" "}
      </button>

      <button className="button" onClick={props.clearAll}>
        Clear Completed{" "}
      </button>
    </>
  );
};

export default TodoForm;
