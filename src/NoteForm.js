import { HeaderTwo } from "./Header";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const NoteForm = ({
  notes,
  setNotes,
  createNewNote,
  newNote,
  setNewNote,
  showNoteForm,
  saveNote,
}) => {
  const modules = {
    toolbar: [["bold", "italic", "underline"], [{ list: "bullet" }]],
  };

  const formats = ["bold", "italic", "underline", "bullet"];

  function handleChange(value) {
    setNewNote(value);

    if (notes.length > 0) {
      const addedNote = notes.length - 1;
      const updatedNotes = [...notes];

      updatedNotes[addedNote] = {
        ...updatedNotes[addedNote],
        content: value,
      };
      setNotes(updatedNotes);
    }
  }

  return (
    <>
      {showNoteForm && (
        <div className="editor_container">
          <HeaderTwo createNewNote={createNewNote} saveNote={saveNote} />
          <form action="" className="note-form">
            <ReactQuill
              theme="snow"
              value={newNote}
              onChange={handleChange}
              className="editor_textarea"
              modules={modules}
              formats={formats}
            />
          </form>
        </div>
      )}
    </>
  );
};

export default NoteForm;
