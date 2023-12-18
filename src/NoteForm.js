import { HeaderTwo } from "./Header";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const NoteForm = ({ createAndNavigateToNewNote, notes, setNotes, theme, setTheme, handleHeaderChange }) => {
  const { id } = useParams();
  const [content, setContent] = useState("");

  useEffect(() => {
    const noteToUpdate = notes.find((note) => note.id === id);

    if (noteToUpdate) {
      setContent(noteToUpdate.content);
    }
  }, [id, notes]);

  const handleQuillChange = (value) => {
    setContent(value);
  };

  const saveNote = () => {
    setNotes((prevNotes) =>
      prevNotes.map((note) => (note.id === id ? { ...note, content } : note))
    );
  };

  const handleKeyDown = (event) => {
    if (event.ctrlKey && event.key === "s") {
      event.preventDefault(); 
      saveNote(); 
    }
  };

  const modules = {
    toolbar: [["bold", "italic", "underline", "strike"], [{ list: "bullet" }]],
  };

  const formats = ["bold", "italic", "underline", "list", "bullet", "strike"];

  return (
    <div className="editor_container">
      <HeaderTwo
        createAndNavigateToNewNote={createAndNavigateToNewNote}
        saveNote={saveNote}
        theme={theme}
        setTheme={setTheme}
        handleHeaderChange={handleHeaderChange}
      />
      <form action="" className="note-form">
        <ReactQuill
          theme="snow"
          value={content}
          className="editor_textarea"
          modules={modules}
          formats={formats}
          onChange={handleQuillChange}
          onKeyDown={handleKeyDown}
        />
      </form>
    </div>
  );
};

export default NoteForm;
