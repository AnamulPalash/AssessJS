import React, { useState, useEffect } from "react";
import { ID } from "../services/storage";

export function Add({ notes, setNotes }) {
  const [input, setInput] = useState("");
  const [note, setNote] = useState("");

  function onTitleChange(event) {
    setInput(event.target.value);
  }

  function onContentChange(event) {
    setNote(event.target.value);
  }

  function onSubmit(event) {
    event.preventDefault();
    let title = input.trim();
    let content = note.trim();
    if (!title || !content) {
      alert("Please add both title & content");
      return;
    }
    setNotes((notes) => [...notes, { id: ID(), title, content }]);
    setInput("");
    setNote("");
  }

  return (
    <div className="header-container">
      <br />
      <form className="add-form" onSubmit={onSubmit}>
        Note Title:
        <input
          value={input}
          onChange={onTitleChange}
          className="header-input"
        />
        <br />
        <br />
        Content:
        <br />
        <textarea
          rows="5"
          cols="50"
          placeholder="Add Details"
          value={note}
          onChange={onContentChange}
          className="header-input"
        />
        <br />
        <input type="submit" value="Add Note" className="btn" />
      </form>

      <br />
    </div>
  );
}

export default Add;
