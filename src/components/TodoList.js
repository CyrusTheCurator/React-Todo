// your components will all go in props `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";

const TodoList = props => {
  return (
    <>
      {props.state.todoItems
        ? props.state.todoItems.map(item => {
            return (
              <div
                className={`item${item.isCompleted ? " purchased" : ""}`}
                id={item.id}
                onClick={() => {
                  props.handleItemClick(item.id);
                }}
              >
                {item.name}
              </div>
            );
          })
        : "Add items to your list to begin"}
    </>
  );
};

export default TodoList;
