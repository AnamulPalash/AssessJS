import React from "react";
import Add from "./add";

export function AddNote(props) {
  return (
    <div className="App">
      <Add notes={props.notes} setNotes={props.setNotes} />
    </div>
  );
}
