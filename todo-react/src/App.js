import { useEffect, useRef, useState } from "react";

function App() {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todosInMemory")) || []
  );

  useEffect(() => {
    localStorage.setItem("todosInMemory", JSON.stringify(todos));
  }, [todos]);

  const getNewId = () => {
    if (todos.length > 0) {
      return todos[todos.length - 1].id + 1;
    } else {
      return 1;
    }
  };

  /*
    This function will add the new todo to the `todos` array using `setTodos`
  */
  const addTodo = (e, inputText) => {
    /* prevent default behaviour of reloading 
    the page on submitting the form */
    e.preventDefault();

    /* set the state of todos by copying prev 
    state and adding the new todo obj at the end */
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: getNewId(), text: inputText },
    ]);
  };

  /* 
    will find the todo to remove and update its `complete` 
    property to `true`
   */
  const completeTodo = (removeId) => {
    // Alternatively, we can just remove that todo from the Array
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== removeId));
  };

  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2">
        <div className="col p-4">
          {/* todo form goes here  */}
          <Form submitTodo={addTodo} />
        </div>
        <div className="col p-4">
          {/* todo list goes here  */}
          <ul className="list-unstyled">
            {todos.map((todo) => (
              <Todo key={todo.id} todo={todo} completeTodo={completeTodo} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

const Form = ({ submitTodo }) => {
  const inputTextField = useRef();

  const handleSubmit = (e) => {
    // call the function defined in parent
    submitTodo(e, inputTextField.current.value);

    // clear the input field
    inputTextField.current.value = "";
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* input field - to enter a todo */}
      <input
        ref={inputTextField}
        className="form-control form-control-lg"
        type="text"
        placeholder="Your TODO"
        required
      />
      {/* submit button */}
      <input type="submit" className="btn btn-primary my-3 w-100" />
    </form>
  );
};

const Todo = ({ todo, completeTodo }) => {
  const handleOnClick = () => {
    // call the function defined in parent
    completeTodo(todo.id);
  };

  return (
    <li>
      <div className="form-check">
        {/* checkbox */}
        <input
          className="form-check-input"
          type="checkbox"
          onClick={handleOnClick}
        />
        {/* todo */}
        <label className="form-check-label">{todo.text}</label>
      </div>
    </li>
  );
};
export default App;
