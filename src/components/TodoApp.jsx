import { useState, useEffect } from "react";
import NavBar from "./navBar";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [filterdTodos, setFilterdTodos] = useState([]);
  const [status, setStatus] = useState("All");

  useEffect(() => {
    filterTodo(status);
  }, [todos, status]);

  const addTodo = (input) => {
    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      text: input,
      isCompleted: false,
    };
    setTodos([...todos, newTodo]);
  };

  const completeTodo = (id) => {
    const index = todos.findIndex((todo) => todo.id === id);
    // clone : do not mutate
    const selectedTodo = { ...todos[index] };
    selectedTodo.isCompleted = !selectedTodo.isCompleted;
    const updatedTodos = [...todos];
    updatedTodos[index] = selectedTodo;
    setTodos(updatedTodos);
  };

  const filteritem = (id) => {
    const deletItem = todos.filter((t) => t.id !== id);
    setTodos(deletItem);
  };

  const updatedTodo = (id, newValue) => {
    const index = todos.findIndex((todo) => todo.id === id);
    const selectedTodo = { ...todos[index] };
    selectedTodo.text = newValue;
    const updatedTodos = [...todos];
    updatedTodos[index] = selectedTodo;
    setTodos(updatedTodos);
  };

  const filterTodo = (status) => {
    switch (status) {
      case "completed":
        setFilterdTodos(todos.filter((t) => t.isCompleted));
        break;
      case "unCompleted":
        setFilterdTodos(todos.filter((t) => !t.isCompleted));
        break;

      default:
        setFilterdTodos(todos);
    }
  };

  const selectHandler = (e) => {
    setStatus(e.target.value);
    filterTodo(e.target.value);
  };

  return (
    <div className="container">
      <NavBar
        uncomplitedTodos={todos.filter((t) => !t.isCompleted).length}
        filterTodo={filterTodo}
        onChange={selectHandler}
      />
      <TodoForm submitTodo={addTodo} />
      <TodoList
        todos={filterdTodos}
        onComplete={completeTodo}
        removehandler={filteritem}
        updatedTodo={updatedTodo}
      />
    </div>
  );
};

export default TodoApp;
