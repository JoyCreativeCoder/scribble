import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Header = ({ createAndNavigateToNewNote, theme, setTheme,  handleHeaderChange }) => {

  return (
    <>
      <div className="header" style={{ backgroundColor: theme }}>
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

export const HeaderTwo = ({ createAndNavigateToNewNote, saveNote, theme, setTheme, handleHeaderChange}) => {
  const navigate = useNavigate();
  const [isDropdownOpen, setDropdownOpen] = useState(false);


  const toggleDropdown = () => {
    setDropdownOpen((prevIsDropdownOpen) => !prevIsDropdownOpen);
  };
  return (
    <>
      <div className="header_two" style={{ backgroundColor: theme }}>
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
        <div className="drop_down_container">
          <div className="color-pallet">
            <div
              className="yellow"
              onClick={() => {
                handleHeaderChange("#FFD700");
              }}
            ></div>
            <div
              className="Sky-Blue"
              onClick={() => {
                handleHeaderChange("rgb(152, 107, 241)");
              }}
            ></div>
            <div
              className="Mint-Green"
              onClick={() => {
                handleHeaderChange("#7df27d");
              }}
            ></div>
            <div
              className="Lavender"
              onClick={() => {
                handleHeaderChange("#fae6f0");
              }}
            ></div>
            <div
              className="Charcoal-Gray"
              onClick={() => {
                handleHeaderChange("#3f3d3d");
              }}
            ></div>
            <div
              className="Sunset-Orange"
              onClick={() => {
                handleHeaderChange("#ffa785");
              }}
            ></div>
            <div
              className="Goldenrod"
              onClick={() => {
                handleHeaderChange("#ff6363");
              }}
            ></div>
          </div>
          <div className="note-list" onClick={() => navigate("/")}>
            <span className="material-symbols-outlined" id="notes-icon">
              notes
            </span>
            <span className="viewnoteList">Note List</span>
          </div>
          <div className="delete-note">
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
