import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NoteList = ({ notes, theme, setNotes }) => {
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const [filteredNotes, setFilteredNotes] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const filtered = notes.filter((note) =>
      note.content.toLowerCase().includes(searchInput.toLowerCase())
    );
    setFilteredNotes(filtered);
  }, [notes, searchInput]);

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
    const updatedNotes = notes.filter((n) => n !== note);
    setNotes(updatedNotes);
    closeDropdown();
  };

  if (notes.length === 0) {
    navigate("/");
  }

  //search funtionality

  function handleInputChange(event) {
    setSearchInput(event.target.value);
  }

  const handleDoubleClick = (note) => {
    const id = note.id;
    navigate(`/${id}`);
    closeDropdown();
  };

  return (
    <div className="note_list_content_bg">
      <h1 className="your_scribble">Your Scribble</h1>
      <input
        value={searchInput}
        type="text"
        className="search_bar"
        placeholder="Search..."
        onChange={handleInputChange}
      />
      <div className="note-list-container">
        <ul className="note_item_container">
          {filteredNotes.map((note) => (
            <li
              key={note.id}
              style={{ borderTop: `4px solid ${theme}` }}
              className="note-item-li"
              onDoubleClick={() => handleDoubleClick(note)}
            >
              <span
                dangerouslySetInnerHTML={{ __html: note.content }}
                className="note_preview"
              />

              <div className="bottom-right"></div>

              <div className="svg-bg" onClick={() => toggleNoteListDropdown(note.id)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="5"
                  viewBox="0 0 20 5"
                  fill="none"
                  className="more-icon"
                  title="Menu"
                >
                  <path
                    d="M2.22232 0C1.00005 0 0 1.00005 0 2.22232C0 3.4446 1.00005 4.44465 2.22232 4.44465C3.4446 4.44465 4.44465 3.4446 4.44465 2.22232C4.44465 1.00005 3.4446 0 2.22232 0Z"
                    fill="white"
                  />
                  <path
                    d="M17.7776 0C16.5553 0 15.5553 1.00005 15.5553 2.22232C15.5553 3.4446 16.5553 4.44465 17.7776 4.44465C18.9999 4.44465 19.9999 3.4446 19.9999 2.22232C19.9999 1.00005 18.9999 0 17.7776 0Z"
                    fill="white"
                  />
                  <path
                    d="M9.99906 0C8.77678 0 7.77673 1.00005 7.77673 2.22232C7.77673 3.4446 8.77678 4.44465 9.99906 4.44465C11.2213 4.44465 12.2214 3.4446 12.2214 2.22232C12.2214 1.00005 11.2213 0 9.99906 0Z"
                    fill="white"
                  />
                  id={`note-list-more-icon_${note.id}`}
                </svg>
              </div>
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
