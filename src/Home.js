import Header from "./Header";
import NoteList from "./NoteList";
// import  { useState } from 'react';

const Home = ({ notes, setNotes, createNewNote }) => {
  return (
    <>
      <Header createNewNote={createNewNote} />
      <div className="home-content">
        <NoteList notes={notes} />
      </div>
    </>
  );
};

export default Home;
