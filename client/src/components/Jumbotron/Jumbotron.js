import React from "react";

const Jumbotron = ({ children }) =>
  <div style={{ height: 300, clear: 'both', backgroundColor: '#89c7f0'  }} className="jumbotron">
    {children}
  </div>;

export default Jumbotron;
