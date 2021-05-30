import React from "react";
import { Switch, Route } from "react-router-dom";
import { AddNote, Edit, Home, View } from "../pages";

export function Routes(props) {
  return (
    <Switch>
      <Route exact path="/">
        <Home notes={props.notes} setNotes={props.setNotes} />{" "}
      </Route>
      <Route exact path="/edit/:index">
        <Edit notes={props.notes} setNotes={props.setNotes} />{" "}
      </Route>
      <Route exact path="/addnote">
        <AddNote notes={props.notes} setNotes={props.setNotes} />{" "}
      </Route>
      <Route> You seems lost my stranger, 404 not found </Route>
    </Switch>
  );
}

// homepage
// edit button (looping through the notes): history.push('/edit/' + index);

// routes --> /edit/:index

// edit
// react router dom docs --> useParams
// const { index } = useParams();
