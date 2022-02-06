# TODO app using React

## Building the UI

1. Add Bootstrap CSS and JS to `public/index.html`

```html
<!-- Bootstrap CSS -->
<link
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
  rel="stylesheet"
  integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
  crossorigin="anonymous"
/>

<!-- Bootstrap JS -->
<script
  src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
  integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
  crossorigin="anonymous"
></script>
```

2. Responsive layout from Bootstrap's [grid system](https://getbootstrap.com/docs/5.0/layout/grid/#row-columns)

```html
<div className="container">
  <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2">
    <div className="col">{/* todo form goes here */}</div>
    <div className="col">{/* todo list goes here */}</div>
  </div>
</div>
```

3. Create a `Todo` component

```jsx
const Todo = ({ todo, toggleTodo }) => {
  const handleOnChange = () => {
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
          onChange={handleOnChange}
          checked={todo.complete}
        />
        {/* todo */}
        <label className="form-check-label">{todo.text}</label>
      </div>
    </li>
  );
};
```

4. Create a `Form` component

```jsx
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
```
