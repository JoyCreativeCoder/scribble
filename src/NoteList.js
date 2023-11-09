// import  { useState } from 'react';

const NoteList = ({ notes }) => {
  return (
    <>
      <div className="note_list_content_bg">
        <h1 className="your_scribble">Your Scribble</h1>
        {notes.map((note) => (
          <ul className="note_item_container">
            <li key={note.id}>{note.content}</li>
          </ul>
        ))}
      </div>
    </>
  );
};

export default NoteList;
