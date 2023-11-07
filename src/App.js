import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import NoteForm from "./NoteForm";
import NoteList from "./NoteList";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";


/*
when the add icon is clicked
1; go and render a new note form component;
2; create new note object
3; Add input event to the textarea
4; on input :
1. get the object content property and set it to be e.target.value
5; push the object to the notes array.
*/

function App() {
  const [notes, setNotes] = useState([]);
  const [textAreaValue, setTextAreaValue] = useState("");
    const initialNewNote = {
      id: uuidv4(),
      content: "",
    };
    const [newNote, setNewNote] = useState(initialNewNote);

    function addNote() {

        setNewNote({
            id: uuidv4(),
            content: textAreaValue,
          });

        const updatedNote = [...notes, newNote];
        setNotes(updatedNote);
        newNote.content = textAreaValue;

        console.log(updatedNote);

      
          setTextAreaValue("");

          setNewNote({
            id: uuidv4(),
            content: "",
          });
    }

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
              <NoteForm
                notes={notes}
                setNotes={setNotes}
                addNote={addNote}
                // newNote={newNote}
                textAreaValue={textAreaValue}
                setTextAreaValue={setTextAreaValue}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
