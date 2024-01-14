import { HeaderTwo } from "./Header";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const NoteForm = ({
  createAndNavigateToNewNote,
  notes,
  setNotes,
  theme,
  setTheme,
  handleHeaderChange,
}) => {
  const navigate = useNavigate();

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

  const deleteNoteAndNavigate = () => {
    const updatedNotes = notes.filter((n) => n.id !== id);
    setNotes(updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
    navigate("/");
  };


  return (
    <div className="editor_container">
      <HeaderTwo
        createAndNavigateToNewNote={createAndNavigateToNewNote}
        saveNote={saveNote}
        theme={theme}
        setTheme={setTheme}
        handleHeaderChange={handleHeaderChange}
        notes={notes}
        setNotes={setNotes}
        deleteNoteAndNavigate={deleteNoteAndNavigate}
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
          placeholder={"Take a note ..."}
        />
      </form>

      <style>
        {`
          .editor_container .ql-toolbar .ql-stroke,
          .editor_container .ql-toolbar .ql-fill {
            stroke: ${theme} !important;
          }
        `}
      </style>
    </div>
  );
};

export default NoteForm;
