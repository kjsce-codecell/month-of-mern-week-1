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

3.
