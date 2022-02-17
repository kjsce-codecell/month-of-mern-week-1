import { useEffect, useState } from "react";
import Form from "./components/Form";
import Todo from "./components/Todo";
import ResponsiveContainer from "./components/ResponsiveContainer";

function App() {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todosInMemory")) || []
  );

  useEffect(() => {
    localStorage.setItem("todosInMemory", JSON.stringify(todos));
  }, [todos]);

  /*
    Utility function to get ID for next todo
  */
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
  const addTodo = (inputText) => {
    /* set the state of todos by copying prev 
    state and adding the new todo obj at the end */
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: getNewId(), text: inputText, complete: false },
    ]);
  };

  /* 
    will find the todo to remove and update its `complete` 
    property to `true`
   */
  const toggleTodo = (toggleId) => {
    // copy the current todos in a new variable
    let newTodos = todos;

    //Find index of specific object using findIndex method.
    let todoIndex = todos.findIndex((todo) => todo.id === toggleId);

    //Update object's complete property.
    newTodos[todoIndex].complete = !newTodos[todoIndex].complete;

    // update the state of `todos` to the new `todos`
    setTodos([...newTodos]);

    // Alternatively, we can just remove that todo from the Array
    // setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== removeId));
  };

  return (
    <ResponsiveContainer>
      <div className="col p-4">
        {/* todo form goes here  */}
        <Form submitTodo={addTodo} />
      </div>
      <div className="col p-4">
        {/* todo list goes here  */}
        <ul className="list-unstyled">
          {todos.map((todo) => (
            <Todo key={todo.id} todo={todo} toggleTodo={toggleTodo} />
          ))}
        </ul>
      </div>
    </ResponsiveContainer>
  );
}

export default App;
