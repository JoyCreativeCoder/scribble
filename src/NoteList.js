import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NoteList = ({ notes, theme }) => {
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const [filteredNotes, setFilteredNotes] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const filtered = notes.filter((note)=>(
      note.content.toLowerCase().includes(searchInput.toLowerCase())
    ))
    setFilteredNotes(filtered)
  },[notes, searchInput]);

  const toggleNoteListDropdown = (noteId) => {
    setDropdownOpen((prevId) => (prevId === noteId ? null : noteId));
  };

  const closeDropdown = () => {
    setDropdownOpen(null);
  };

  const editNote = (note) => {
    const id = note.id;
    navigate(`/${id}`);
    closeDropdown();
  };

  const deleteNote = (note) => {
    const noteToDelete = notes.indexOf(note);
    if (noteToDelete !== -1) {
      notes.splice(noteToDelete, 1);
      closeDropdown();
    }
  };

  if (notes.length === 0) {
    navigate("/");
  }

  useEffect(() => {
    console.log("Theme in NoteList:", theme);
  }, [theme]);

  //search funtionality

  function handleInputChange(event){
    setSearchInput(event.target.value);
    }



  return (
    <div className="note_list_content_bg">
      <h1 className="your_scribble">Your Scribble</h1>
      <span className="material-symbols-outlined" id="search-icon">
        search
      </span>
      <input
        value={searchInput}
        type="text"
        className="search_bar"
        placeholder="Search..."
        onChange={handleInputChange}
      />
      <div className="container_note">
        <ul className="note_item_container">
          {filteredNotes.map((note) => (
            <li key={note.id} style={{ borderTop: `4px solid ${theme}` }}>
              <div className="top-left"></div>
              <p dangerouslySetInnerHTML={{ __html: note.content }}></p>
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
                    <span
                      className="material-symbols-outlined"
                      id="edit-note-icon"
                    >
                      edit_note
                    </span>
                    <span className="edit-note" id="delete-note">
                      Edit Note
                    </span>
                  </div>
                  <div
                    className="note_list_drop_container_two"
                    onClick={() => deleteNote(note)}
                  >
                    <span
                      className="material-symbols-outlined"
                      id="delete-note-icon"
                    >
                      delete
                    </span>
                    <span className="delete-note-text">Delete Note</span>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NoteList;
