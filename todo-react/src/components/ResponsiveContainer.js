const ResponsiveContainer = ({ children }) => (
  <div className="container">
    <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2">{children}</div>
  </div>
);

export default ResponsiveContainer;
