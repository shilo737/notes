import React, { useState } from "react";
import NoteCard from "./notes/NoteCard";
import AddNote from "./notes/AddNote";
import useNote from "../hooks/useNote";
import { useEffect } from "react";
import Header from "./Header";
import Modal from '../modal/Modal'
import SearchNote from "./notes/SearchNote";
const Home = () => {
  const { notes, getAllNotes } = useNote();
  const [addNote, setAddNote] = useState(false);
  const [filteredNotes, setFilteredNotes] = useState([]);

  useEffect(() => {
    getAllNotes();
  }, []);

  return (
    <>
      <Header />
      <div className="container mx-auto">
      <SearchNote setFilteredNotes={setFilteredNotes}/>
        <div className="flex justify-end my-10">
          <button className="btn bg-blue-600 hover:bg-blue-800" onClick={()=> setAddNote(true)}>Add Note</button>
        </div>
        <div className="flex justify-center">
          <p className="text-[2.5em] text-blue-500 font-bold underline underline-offset-4">My Notes</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
        {filteredNotes.length > 0
            ? filteredNotes.map((item) => (
                <NoteCard key={item.id} note={item} />
              ))
            : notes.map((item) => (
                <NoteCard key={item.id} note={item} />
              ))}
        </div>
      </div>
      <Modal open={addNote} setOpen={setAddNote}>
        <AddNote setAddNote={setAddNote}/>
      </Modal>
    </>
  );
};

export default Home;
