// import  { useState } from 'react';

const NoteList = ({ notes }) => {
  return (
    <>
      <div className="note_list_content_bg">
        <h1 className="your_scribble">Your Scribble</h1>
        <div className="container_note">
        {notes.map((note) => (
          <ul className="note_item_container" key={note.id}>
            <li >{note.content}</li>
          </ul>
        ))}
        </div>

      </div>
    </>
  );
};

export default NoteList;
