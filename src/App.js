import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import { useNavigate } from "react-router-dom";
import NoteForm from "./NoteForm";
import { v4 as uuidv4 } from "uuid";
import NoteList from "./NoteList";
import { useState, useEffect } from "react";

function Root() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(storedNotes);
  }, []);

  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);


  function createAndNavigateToNewNote() {
    const id = uuidv4();

    const newNoteObject = {
      id,
      content: "",
    };

    setNotes((prevNotes) => {
      const updatedNotes = [...prevNotes, newNoteObject];
      return updatedNotes; //why did i return ?
    });

    navigate(`/${id}`);
  }

  

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Home
              notes={notes}
              setNotes={setNotes}
              createAndNavigateToNewNote={createAndNavigateToNewNote}
            />
          }
        />
        <Route
          path="/NoteList"
          element={<NoteList notes={notes} setNotes={setNotes} />}
        />
        <Route
          path="/:id"
          element={
            <NoteForm
              createAndNavigateToNewNote={createAndNavigateToNewNote}
              notes={notes}
              setNotes={setNotes}
            />
          }
        />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Root/>
    </Router>
  );
}

export default App;
