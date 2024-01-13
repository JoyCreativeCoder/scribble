import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import { useNavigate } from "react-router-dom";
import NoteForm from "./NoteForm";
import { v4 as uuidv4 } from "uuid";
import NoteList from "./NoteList";
import { useState, useEffect } from "react";

function Root() {
  const [notes, setNotes] = useState([]);

  const [theme, setTheme] = useState("#6fb1fc");


  function handleHeaderChange(color) {
    setTheme(color);
    localStorage.setItem("userTheme", color);
  }


  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(storedNotes);
  }, []);

  useEffect(() => {
    const storedTheme = localStorage.getItem("userTheme");
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  const navigate = useNavigate();



  function createAndNavigateToNewNote() {
    const id = uuidv4();

    const newNoteObject = {
      id,
      content: "",
    };

    setNotes((prevNotes) => {
      const updatedNotes = [...prevNotes, newNoteObject];
      localStorage.setItem("notes", JSON.stringify(updatedNotes));
      return updatedNotes;
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
              theme={theme}
              setTheme={setTheme}
              handleHeaderChange={handleHeaderChange}
            />
          }
        />
        <Route
          path="/NoteList"
          element={
            <NoteList
              notes={notes}
              setNotes={setNotes}
              theme={theme}
              setTheme={setTheme}
            />
          }
        />
        <Route
          path="/:id"
          element={
            <NoteForm
              createAndNavigateToNewNote={createAndNavigateToNewNote}
              notes={notes}
              setNotes={setNotes}
              theme={theme}
              handleHeaderChange={handleHeaderChange}
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
      <Root />
    </Router>
  );
}

export default App;
