const Todo = ({ todo, toggleTodo }) => {
  const handleOnClick = () => {
    // call the function defined in parent
    toggleTodo(todo.id);
  };

  return (
    <li>
      <div className="form-check fs-3">
        {/* checkbox */}
        <input
          className="form-check-input big-checkbox"
          type="checkbox"
          onChange={handleOnClick}
          checked={todo.complete}
        />
        {/* todo */}
        <label className="form-check-label">{todo.text}</label>
      </div>
    </li>
  );
};

export default Todo;
