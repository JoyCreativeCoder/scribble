import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NoteList = ({ notes }) => {
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const navigate = useNavigate();

  const toggleNoteListDropdown = (noteId) => {
    setDropdownOpen((prevId) => (prevId === noteId ? null : noteId));
  };

  const closeDropdown = () => {
    setDropdownOpen(null);
  };

  const editNote = (note) => {
    const id = note.id;
    navigate(`/${id}`);
    closeDropdown(); // Close the dropdown after navigating
  };

  const deleteNote = (note) => {
    const noteToDelete = notes.indexOf(note);
    if (noteToDelete !== -1) {
      notes.splice(noteToDelete, 1);
      closeDropdown(); // Close the dropdown after deleting
    }
  };

  if(notes.length === 0) {
    navigate('/');
  }

  return (
    <>
      <div className="note_list_content_bg">
        <h1 className="your_scribble">Your Scribble</h1>
        <div className="container_note">
          <ul className="note_item_container">
            {notes.map((note) => (
              <li key={note.id}>
                <div dangerouslySetInnerHTML={{ __html: note.content }}></div>
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
                    <div
                      className="note_list_drop_container_one"
                      onClick={() => editNote(note)}
                    >
                      <span className="material-symbols-outlined">
                        edit_note
                      </span>
                      <span className="edit-note">Edit Note</span>
                    </div>
                    <div
                      className="note_list_drop_container_two"
                      onClick={() => deleteNote(note)}
                    >
                      <span className="material-symbols-outlined">delete</span>
                      <span className="delete-note">Delete Note</span>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default NoteList;
