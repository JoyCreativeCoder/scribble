import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Header = ({ createAndNavigateToNewNote }) => {
  return (
    <>
      <div className="header">
        <span
          className="material-symbols-outlined"
          onClick={createAndNavigateToNewNote}
        >
          add
        </span>
      </div>
    </>
  );
};

export default Header;

export const HeaderTwo = ({ createAndNavigateToNewNote, saveNote }) => {
  const navigate = useNavigate();
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    console.log("clicked");
    setDropdownOpen((prevIsDropdownOpen) => !prevIsDropdownOpen);
  };
  return (
    <>
      <div className="header_two">
        <div className="icon-hover-bg">
          <span
            className="material-symbols-outlined"
            onClick={createAndNavigateToNewNote}
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
            <span className="list" onClick={() => navigate("/")}>
              Note List
            </span>
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
