import { HeaderTwo } from "./Header";
import { useRef, useEffect } from "react";

const NoteForm = ({
  notes,
  setNotes,
  addNote,
  newNote,
  textAreaValue,
  setTextAreaValue,
  saveNote

}) => {
  const textAreaRef = useRef(null);

  useEffect(() => {
    // Set focus to the text area when the component mounts
    if (textAreaRef.current) {
      textAreaRef.current.focus();
    }
  }, []);

  function handleInput(e) {
    setTextAreaValue(e.target.value);
  }

  return (
    <>
      <div className="editor_container">
                  
        <HeaderTwo onAddNote={addNote} saveNote={saveNote}  />
        <form action="" className="note-form">
          <textarea
            ref={textAreaRef}
            name="note-editor"
            className="editor_textarea"
            cols="30"
            rows="10"
            placeholder="Take a note...."
            value={textAreaValue}
            onChange={handleInput}
          ></textarea>
        </form>
      </div>
    </>
  );
};

export default NoteForm;
