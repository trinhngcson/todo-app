import React from "react";

export const Header = (props) => {
  const { todos } = props;
  const todosLenght = todos.length;
  const isTasksPlural = todos.length != 1;

  const taskOrTasks = isTasksPlural ? "TASKS" : "TASK";
  return (
    <header>
      <h1 className="text-gradient">
        YOU HAVE {todosLenght} OPEN {taskOrTasks}.
      </h1>
    </header>
  );
};
