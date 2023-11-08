import { Link } from "react-router-dom";

const Header = ({ onAddNote }) => {
  return (
    <>
      <div className="header">
        <Link to="/NoteForm">
          <span className="material-symbols-outlined" onClick={onAddNote}>
            add
          </span>
        </Link>
      </div>
    </>
  );
};

export default Header;

export const HeaderTwo = ({ onAddNote }) => {
  return (
    <div className="header_two">
      <span className="material-symbols-outlined" onClick={onAddNote} title="New Note">
        add
      </span>
      <span className="material-symbols-outlined" title="Save Note" >file_save</span>
      <span className="material-symbols-outlined" title="Menu">more_horiz</span>
    </div>
  );
};
