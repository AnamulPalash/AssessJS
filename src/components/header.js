import React from "react";
import "./style/header.css";
import { Link } from "react-router-dom";

export function Header({ setNotes }) {
  function resetNotes() {
    setNotes([]);
  }

  return (
    <div className="header">
      <h1>My Notepad </h1>
      <br />
      <nav>
        <Link to="/">Home</Link>
        {/* <Link to="/edit">Edit</Link> */}
        <Link to="/addnote">Add Note</Link>
      </nav>
      <br />
      <button onClick={resetNotes}>Get rid of my notes</button>
    </div>
  );
}
