import React from "react";
import "./Nav.css";

const Nav = () =>
  <nav className="navbar navbar-top">
    <div className="container-fluid">
      <div className="navbar-header">
        <button type="button" className="collapsed navbar-toggle">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" /> <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <a href="/users" className="navbar-brand">
          User List
        </a>
        <a href="/chores" className="navbar-brand">
          Chore List
        </a>
        <a href="/" className="navbar-brand">
          About
        </a>
      </div>
    </div>
  </nav>;

export default Nav;
