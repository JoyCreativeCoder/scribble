import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import NoteForm from "./NoteForm";
import NoteList from "./NoteList";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [notes, setNotes] = useState([]);
  const [textAreaValue, setTextAreaValue] = useState("");
  const [showNoteForm, setShowNoteForm] = useState(false);

  function addNote() {
    setShowNoteForm(true);
    setTextAreaValue("");
  }

  function saveNote() {
    let noteContent = textAreaValue;
    const newNote = {
      id: uuidv4(),
      content: noteContent,
    };

    const updatedNote = [...notes, newNote];
    setNotes(updatedNote);
    console.log(updatedNote);
  }

  // if (textAreaValue.trim() !== "") {

  // }

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <Home notes={notes} setNotes={setNotes} addNote={addNote} />
            }
          />
          <Route
            path="/NoteList"
            element={<NoteList notes={notes} setNotes={setNotes} />}
          />
          <Route
            path="/NoteForm"
            element={
              showNoteForm && (
                <NoteForm
                  notes={notes}
                  setNotes={setNotes}
                  addNote={addNote}
                  // newNote={newNote}
                  textAreaValue={textAreaValue}
                  setTextAreaValue={setTextAreaValue}
                  saveNote={saveNote}
                />
              )
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
