import React, { useEffect } from "react";

import "./NotesList.css";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteNoteAction,
  fetchNotesAction,
} from "../redux/action/notesAction";
import store from "../redux/store/store";

const NotesList = () => {
  //dispatch
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchNotesAction());
  }, []);
  //get data from store
  const notes = useSelector((storeData) => {
    return storeData.notes;
  });
  console.log(notes);
  return (
    <>
      <h1>Notes List</h1>
      {notes.map((note) => (
        <div key={note.id} className="item-container">
          <div className="item-content">
            <h2>{note.title}</h2>
            <p>{note.content}</p>
            <button onClick={() => dispatch(deleteNoteAction(note.id))}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </>
  );
};
export default NotesList;
