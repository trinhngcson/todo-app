import React from "react";
import { TodoCard } from "./TodoCard";

export const TodoList = (props) => {
  let { todos, selectedTab } = props;
  const filterTodosList =
    selectedTab === "ALL"
      ? todos
      : selectedTab === "COMPLETE"
      ? todos.filter((val) => val.complete)
      : todos.filter((val) => !val.complete);

  return (
    <>
      {filterTodosList.map((todo, todoIndex) => {
        return (
          <TodoCard
            key={todoIndex}
            todoIndex={todos.findIndex((val) => val.input == todo.input)}
            todo={todo}
            {...props}
          />
        );
      })}
    </>
  );
};
