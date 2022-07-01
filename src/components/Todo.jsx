const Todo = ({ input, onComplete, removehandler, onEdite }) => {
  return (
    <div className="todo">
      <div
        onClick={onComplete}
        className={`todoText ${input.isCompleted ? "completed" : ""}`}
      >
        {input.text}
      </div>
      <div>
        <button className="btn" onClick={onEdite}>
          Edit
        </button>
        <button className="btn remove" onClick={removehandler}>
          delete
        </button>
      </div>
    </div>
  );
};

export default Todo;
