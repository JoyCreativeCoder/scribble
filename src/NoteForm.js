// // import { HeaderTwo } from "./Header";
// // import ReactQuill from "react-quill";
// // import "react-quill/dist/quill.snow.css";
// // import { useState, useEffect } from "react";

// // const NoteForm = ({
// //   notes,
// //   setNotes,
// //   createAndNavigateToNewNote,
// //   newNote,
// //   setNewNote,
// //   saveNote,
// // }) => {
// //   const modules = {
// //     toolbar: [["bold", "italic", "underline"], [{ list: "bullet" }]],
// //   };

// //   const formats = ["bold", "italic", "underline", "bullet"];

// //   const [value, setValue] = useState(newNote);

// //   useEffect(() => {
// //     setValue(newNote); /* we use the use effect hook to synchronise the newNote and the value prop from the reactQuill
// //     so when the component mounts the value from the react Quill is set to the newNote and the newNote is passed as a dependency to ensure that when ever the newNote changes the value also changes.*/
// //   }, [newNote]);

// //   function handleChange(content) {
// //     setValue(content);
// //     if (notes.length > 0) {
// //       const addedNote = notes.length - 1;
// //       const updatedNotes = [...notes];

// //       updatedNotes[addedNote] = {
// //         ...updatedNotes[addedNote],
// //         content: content,
// //       };
// //       setNotes(updatedNotes);
// //     }
// //     setNewNote(content); 
// //   }

// //   return (
// //         <div className="editor_container">
// //           <HeaderTwo createAndNavigateToNewNote={createAndNavigateToNewNote} saveNote={saveNote} />
// //           <form action="" className="note-form">
// //             <ReactQuill
// //               theme="snow"
// //               value={value}
// //               onChange={handleChange}
// //               className="editor_textarea"
// //               modules={modules}
// //               formats={formats}
// //             />
// //           </form>
// //         </div>
// //   );
// // };

// // export default NoteForm;

// //new note form

// import { HeaderTwo } from "./Header";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";
// import {useState} from 'react';



// const NoteForm = () => {
//     const modules = {
//     toolbar: [["bold", "italic", "underline"], [{ list: "bullet" }]],
//   };

//   const formats = ["bold", "italic", "underline", "bullet"];

//   return ( 
//     <div className="editor_container">
//             <HeaderTwo />
//              <form action="" className="note-form">
//                  <ReactQuill
//                   theme="snow"
//                   value={''}
//                   className="editor_textarea"
//                   modules={modules}
//                   formats={formats}
//                 />
//               </form>
//             </div>
//    );
// }
 
// export default NoteForm;

import { HeaderTwo } from "./Header";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const NoteForm = ({ createAndNavigateToNewNote, notes, setNotes }) => {
  const { id } = useParams();// i used useparams to get the unique id from the url
  const [content, setContent] = useState('');

  useEffect(() => {
    const noteToUpdate = notes.find((note) => note.id === id);

    if (noteToUpdate) {
      setContent(noteToUpdate.content);
    }
  }, [id, notes]);

  const handleQuillChange = (value) => {
    setContent(value);
  };

  const saveNote = () => {
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === id ? { ...note, content } : note
      )
    );
  }; 

  const modules = {
    toolbar: [["bold", "italic", "underline"], [{ list: "bullet" }]],
  };

  const formats = ["bold", "italic", "underline", "bullet"];

  return (
    <div className="editor_container">
      <HeaderTwo createAndNavigateToNewNote={createAndNavigateToNewNote} saveNote={saveNote}/>
      <form action="" className="note-form">
        <ReactQuill
          theme="snow"
          value={content}
          className="editor_textarea"
          modules={modules}
          formats={formats}
          onChange={handleQuillChange}
        />
      </form>
    </div>
  );
};

export default NoteForm;
