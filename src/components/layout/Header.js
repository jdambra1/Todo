import React from "react";
import { Link } from "react-router-dom";
import TodoItem from "../TodoItem";

function Header() {
  return (
    <header style={headerStyle}>
      <h1 style={title}>TodoList</h1>
    </header>
  );
}

const headerStyle = {
  background: "#f07d0a",
  color: "#fff",
  textAlign: "center",
  padding: "10px",
};

const linkStyle = {
  color: "#f07d0a",
  textDecoration: "none",
};

const title = {
  fontStyle: "italic",
};

export default Header;
