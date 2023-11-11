import { Link } from "react-router-dom";
import { useState } from "react";

const Header = ({ createNewNote }) => {
  return (
    <>
      <div className="header">
        <Link to="/NoteForm">
          <span className="material-symbols-outlined" onClick={createNewNote}>add</span>
        </Link>
      </div>
    </>
  );
};

export default Header;

export const HeaderTwo = ({ createNewNote, saveNote }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  return (
    <>
      <div className="header_two">
        <div className="icon-hover-bg">
          <span
            className="material-symbols-outlined"
            onClick={createNewNote}
            title="New Note"
          >
            add
          </span>
        </div>

        <div className="icon-hover-bg">
          <span
            className="material-symbols-outlined"
            title="Save Note"
            onClick={saveNote}
          >
            file_save
          </span>
        </div>
        <div className="icon-hover-bg">
          <span
            className="material-symbols-outlined"
            title="Menu"
            onClick={toggleDropdown}
          >
            more_horiz
          </span>
        </div>
      </div>
      {isDropdownOpen && (
        <div className="drop-down_container">
          <div className="drop-down-content-container">
            <span className="material-symbols-outlined" id="notes">
              notes
            </span>
            <span className="list">Note List</span>
          </div>

          <div className="drop-down-content-container-2">
            <span className="material-symbols-outlined" id="delete">
              delete
            </span>
            <span className="del">Delete Note</span>
          </div>
        </div>
      )}
    </>
  );
};
