import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getItem } from "../services/storage";
import View from "./view";
import Add from "./add";
import "./style/style.css";

export function Home({ notes, setNotes }) {
  function deleteNote(id) {
    console.log(id);
    const filteredData = notes.filter((item) => item.id !== id);
    setNotes(filteredData);
  }

  function RenderNotes() {
    return (
      <div >
        {notes.length > 0 ? (
          <div >
            {notes.map((item) => (
              <div className="body-row">
                <ul>{item.title}{" "}<span>
                <Link className="btn2" exact to={`edit/${item.id}`}>
                   Edit
                </Link></span>
                <button className="btn"
                  onClick={() => {
                    deleteNote(item.id);
                  }}>  
                   Delete
                </button></ul>
              </div>
            ))}
          </div>
        ) : (
          <h3>No Note found</h3>
        )}
      </div>
    );
  }

  return (
    <div>
      Notes:
      <RenderNotes />
    </div>
  );
}
