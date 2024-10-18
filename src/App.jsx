import { useEffect, useState } from "react";
import { Header } from "./component/Header";
import { Tabs } from "./component/Tabs";
import { TodoInput } from "./component/TodoInput";
import { TodoList } from "./component/TodoList";

function App() {
  // const todos = [
  //   { input: "hello", complete: true },
  //   { input: "hii", complete: false },
  //   { input: "halo", complete: true },
  //   { input: "keke", complete: false },
  // ];

  const [todos, setTodos] = useState([]);

  const [selectedTab, setSelectedTab] = useState("OPEN");

  function handleAddTodo(newTodo) {
    const newTodoList = [...todos, { input: newTodo, complete: false }];
    setTodos(newTodoList);
    handleSaveDB(newTodoList);
  }
  function handleCompleteTodo(index) {
    let newTodoList = [...todos];
    let completeTodo = todos[index];
    completeTodo["complete"] = true;
    newTodoList[index] = completeTodo;
    setTodos(newTodoList);
    handleSaveDB(newTodoList);
  }
  function handleDeleteTodo(index) {
    let newTodoList = todos.filter((val, valIndex) => {
      return valIndex !== index;
    });
    setTodos(newTodoList);
    handleSaveDB(newTodoList);
  }
  function handleSaveDB(currTodos) {
    localStorage.setItem("todo-app", JSON.stringify({ todos: currTodos }));
  }
  useEffect(() => {
    if (!localStorage || !localStorage.getItem("todo-app")) {
      return;
    }
    let db = JSON.parse(localStorage.getItem("todo-app"));
    setTodos(db.todos);
  }, []);

  return (
    <>
      <Header todos={todos} />
      <Tabs
        todos={todos}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />
      <TodoList
        todos={todos}
        selectedTab={selectedTab}
        handleDeleteTodo={handleDeleteTodo}
        handleCompleteTodo={handleCompleteTodo}
      />
      <TodoInput handleAddTodo={handleAddTodo} />
    </>
  );
}

export default App;
