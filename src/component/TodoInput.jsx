import { useState } from "react";

export const TodoInput = (props) => {
  const [value, setValue] = useState("");
  const { handleAddTodo } = props;
  return (
    <div className="input-container">
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Add Task..."
      />
      <button
        onClick={() => {
          if (!value) {
            return;
          }
          handleAddTodo(value);
          setValue(" ");
        }}
      >
        <i className="fa-solid fa-plus"></i>
      </button>
    </div>
  );
};
