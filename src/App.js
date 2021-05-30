import React, { useState, useEffect } from "react";
import { getItem, setItem, getAllNotes, setAllNotes } from "./services/storage";
import { Header, Routes } from "./components";
import { Home, Footer } from "./pages";
import "./App.css";

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    setNotes(getAllNotes());
  }, []);

  useEffect(() => {
    setAllNotes(notes);
  }, [notes]);

  return (
    <div className="App">
      <Header setNotes={setNotes} />
      <Routes notes={notes} setNotes={setNotes} />
      <Footer />
    </div>
  );
}

export default App;
