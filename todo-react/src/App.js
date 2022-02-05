import { useRef } from "react";

function App() {
  const inputTextField = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    console.log("form submitted", inputTextField.current?.value);
  }

  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2">
        <div className="col">
          {/* todo form goes here  */}
          <form onSubmit={handleSubmit}>
            {/* <!-- input field --> */}
            <input
              ref={inputTextField}
              className="form-control form-control-lg"
              type="text"
              placeholder="Your TODO"
              required
            />
            {/* <!-- submit button --> */}
            <input type="submit" className="btn btn-primary my-3 w-100" />
          </form>
        </div>
        <div className="col">
          {/* todo list goes here  */}
          <ul className="list-unstyled">
            <Todo
              onClick={(id) => {
                console.log(id);
              }}
              todo={{ id: 1, text: "Example TODO" }}
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

const Todo = ({ onClick, todo }) => {
  return (
    <li>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          onClick={onClick(todo.id)}
        />
        <label className="form-check-label">{todo.text}</label>
      </div>
    </li>
  );
};
export default App;
