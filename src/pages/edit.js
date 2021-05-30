import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

export function Edit({ notes, setNotes }) {
  const [data, setData] = useState({});
  const params = useParams();
  const history = useHistory();

  useEffect(() => {
    const currentNote = notes.filter((item) => item.id === params.index)[0];
    setData(currentNote);
  }, []);

  function handleChange(event) {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function onSubmit(event) {
    event.preventDefault();
    let tempData = notes.filter((item) => item.id !== data.id);
    tempData.push(data);
    setNotes(tempData);
    alert("Note updated");
    history.push("/");
  }
  return (
    <div>
      <div className="edit">Edit your note</div>
      <form className="add-form" onSubmit={onSubmit}>
        Note Title:
        <input
          value={data.title}
          name="title"
          //   defaultValue={input}
          onChange={handleChange}
          className="header-input"
        />
        <br />
        <br />
        Content:
        <br />
        <textarea
          rows="5"
          cols="50"
          name="content"
          placeholder="Add Details"
          value={data.content}
          onChange={handleChange}
          className="header-input"
        />
        <br />
        <input type="submit" value="Update Note" className="btn" />
      </form>
    </div>
  );
}
