import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import NoteForm from "./NoteForm";
import NoteList from "./NoteList";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [showNoteForm, setShowNoteForm] = useState(true);

  function createNewNote() {
    setShowNoteForm(true);

    const newNoteObject = {
      id: uuidv4(),
      content: newNote,
    };

    setNotes((prevNotes) => {
      const updatedNotes = [...prevNotes, newNoteObject];
      return updatedNotes;
    });
    
    setNewNote("");
  }

  // function saveNote() {
  //   if (notes.length > 0) {
  //     const addedNote = notes.length - 1;
  //     const updatedNotes = [...notes];

  //     updatedNotes[addedNote] = {
  //       ...updatedNotes[addedNote], // Copy the existing properties of the last note
  //       content: newNote, // Update the 'content' property with the new content
  //     };
  //     setNotes(updatedNotes);
  //     // console.log(notes);
  //   } else {
  //     console.log("No notes to save.");
  //   }
  // }

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                notes={notes}
                setNotes={setNotes}
                createNewNote={createNewNote}
              />
            }
          />
          <Route
            path="/NoteList"
            element={<NoteList notes={notes} setNotes={setNotes} showNoteForm={showNoteForm}/>}
          />
          <Route
            path="/NoteForm"
            element={
              <NoteForm
                notes={notes}
                setNotes={setNotes}
                createNewNote={createNewNote}
                newNote={newNote}
                setNewNote={setNewNote}
                showNoteForm={showNoteForm}
                // saveNote={saveNote}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
