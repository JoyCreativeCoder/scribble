import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import { useNavigate } from "react-router-dom";
import NoteForm from "./NoteForm";
import { v4 as uuidv4 } from "uuid";
import NoteList from "./NoteList";
import { useState } from "react";

function Root() {
  const [notes, setNotes] = useState([]);
  // const [newNote, setNewNote] = useState("");

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

  const navigate = useNavigate();

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
          element={<NoteList notes={notes} setNotes={setNotes}/>}
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
      <Root />
    </Router>
  );
}

export default App;
