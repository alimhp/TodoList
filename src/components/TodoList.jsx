import { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
const TodoList = ({ todos, onComplete, removehandler, updatedTodo }) => {
  const [edit, setEdit] = useState({ id: null, index: "" });

  const edittTodo = (newValue) => {
    updatedTodo(edit.id, newValue);
    setEdit({ id: null, index: "" });
  };

  const rendertodo = () => {
    if (todos.lenght === 0) return <p>enter task...</p>;
    return todos.map((input) => {
      return (
        <Todo
          input={input}
          key={input.id}
          onComplete={() => onComplete(input.id)}
          removehandler={() => removehandler(input.id)}
          onEdite={() => setEdit(input)}
        />
      );
    });
  };

  return (
    <div>
      {edit.id ? <TodoForm submitTodo={edittTodo} edit={edit} /> : rendertodo()}
    </div>
  );
};

export default TodoList;
