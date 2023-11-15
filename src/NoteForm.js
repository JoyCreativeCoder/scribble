import { HeaderTwo } from "./Header";
// import { useRef, useEffect } from "react";
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
  // const textAreaRef = useRef(null);

  // useEffect(() => {
  //   if (showNoteForm) {
  //     textAreaRef.current.focus();
  //   }
  // }, [showNoteForm]);

  const modules = {
    toolbar: [["bold", "italic", "underline", {'list': 'bullet'}]],
  };

  const formats = ["bold", "italic", "underline", "bullet"];

  return (
    <>
      {showNoteForm && (
        <div className="editor_container">
          <HeaderTwo createNewNote={createNewNote} saveNote={saveNote} />
          <form action="" className="note-form">
            {/* <textarea
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
            ></textarea> */}
            <ReactQuill
              theme="snow"
              value={newNote}
              onChange={(value) => setNewNote(value)}
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
