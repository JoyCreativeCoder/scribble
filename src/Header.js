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
      <span className="material-symbols-outlined" onClick={onAddNote}>
        add
      </span>
      <span className="material-symbols-outlined">more_horiz</span>
    </div>
  );
};
