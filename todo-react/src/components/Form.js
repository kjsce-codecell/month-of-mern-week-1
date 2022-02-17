import { useRef } from "react";

const Form = ({ submitTodo }) => {
  const inputTextField = useRef();

  const handleSubmit = (e) => {
    // prevent default behaviour of reloading
    // the page on submitting the form
    e.preventDefault();

    // call the function defined in parent
    submitTodo(inputTextField.current.value);

    // clear the value of input field
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

export default Form;
