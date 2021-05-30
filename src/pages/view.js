import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Row from "../components/row";
import "./style/view.css";

export function View(props) {
  const history = useHistory();

  const onbackClick = () => {
    history.goBack();
  };

  return (
    <div className="body-container">
      <h1>My Notes</h1>
      <button onClick={onbackClick}>Back to list</button>
    </div>
  );
}
export default View;
