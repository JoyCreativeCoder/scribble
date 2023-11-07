import { HeaderTwo } from "./Header";

const NoteForm = ({
  notes,
  setNotes,
  addNote,
  newNote,
  textAreaValue,
  setTextAreaValue,
}) => {
  function handleChange(e) {
    let content = e.target.value;
    setTextAreaValue(content);
    // newNote.content = content;
  }
  return (
    <>
      <div className="editor_container">
        <HeaderTwo onAddNote={addNote} />
        <form action="" className="note-form">
          <textarea
            name="note-editor"
            className="editor_textarea"
            cols="30"
            rows="10"
            placeholder="Take a note...."
            value={textAreaValue}
            onChange={handleChange}
          ></textarea>
        </form>
      </div>
    </>
  );
};

export default NoteForm;
