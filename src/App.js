import TodoApp from "./components/TodoApp";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Todolist App - mp</h1>

      <TodoApp />
    </div>
  );
}

export default App;

// TodoApp: todos
// TodoForm => input + buttom = add todo
// TodoList => todos.map(...) =>
