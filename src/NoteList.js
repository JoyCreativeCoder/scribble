import { useState } from "react";

const NoteList = ({ notes, setShowNoteForm }) => {
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const toggleNoteListDropdown = (noteId) => {
    setDropdownOpen((prevId) => (prevId === noteId ? null : noteId));
    /*
    the toggleNoteListDropdown function takes in a noteId parameter, which represents
    the id of the individual notes.Now when the toggleNoteListDropdown function is called with a note id passed to it, 
    it set the setDropdownOpen, now the state provides a callback function which allows us to correctly update the state based on the previous state.
    so it checks if the previous state id is equal to the current id , if this is true it knows that the dropdown has been opend thus set it to null. If it is not true it knows that this is a new note so it set it to the current note id;
     */
  };

  function handleEdit() {
    setShowNoteForm(true);

    // const newNoteObject = {
    //   id: uuidv4(),
    //   content: newNote,
    // };

    // setNotes((prevNotes) => {
    //   const updatedNotes = [...prevNotes, newNoteObject];
    //   return updatedNotes;
    // });
    
    // setNewNote("");
  }

  return (
    <>
      <div className="note_list_content_bg">
        <h1 className="your_scribble">Your Scribble</h1>
        <div className="container_note">
          {notes.map((note) => (
            <ul className="note_item_container" key={note.id}>
              <li dangerouslySetInnerHTML={{ __html: note.content }} />
              {/* to transform the text we are getting into plain text  */}
              <span
                id={`note_list_more_icon_${note.id}`}
                className="material-symbols-outlined"
                title="Menu"
                onClick={() => toggleNoteListDropdown(note.id)}
              >
                more_horiz
              </span>
              {dropdownOpen === note.id && (
                <div className="note_list_drop_container">
                  <div className="note_list_drop_container_one" onClick={()=>{console.log('clicked')}}>
                    <span className="material-symbols-outlined">edit_note</span>
                    <span className="edit-note">Edit Note</span>
                  </div>
                  <div className="note_list_drop_container_two" onClick={()=>{console.log('clicked')}}>
                    <span className="material-symbols-outlined">delete</span>
                    <span className="delete-note">Delete Note</span>
                  </div>
                </div>
              )}
            </ul>
          ))}
        </div>
      </div>
    </>
  );
};

export default NoteList;
