import { HeaderTwo } from "./Header";
import { useRef, useEffect } from "react";

const NoteForm = ({
  notes,
  setNotes,
  createNewNote,
  newNote,
  setNewNote,
  showNoteForm,
  saveNote,
}) => {
  const textAreaRef = useRef(null);

  useEffect(() => {
    if (showNoteForm) {
      textAreaRef.current.focus();
    }
  }, [showNoteForm]);

  return (
    <>
      {showNoteForm && (
        <div className="editor_container">
          <HeaderTwo createNewNote={createNewNote} saveNote={saveNote} />
          <form action="" className="note-form">
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className="editor_textarea"
              ref={textAreaRef}
              type="text"
              placeholder="Enter your new note"
              value={newNote}
              onInput={(e) => setNewNote(e.target.value)}
            ></textarea>
          </form>
        </div>
      )}
    </>
  );
};

export default NoteForm;
