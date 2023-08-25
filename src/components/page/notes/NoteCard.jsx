import React, { useEffect, useState } from "react";
import useNote from "../../hooks/useNote";
import Modal from "../../modal/Modal";
import UpdateNote from "./UpdateNote";

const NoteCard = ({ note }) => {
  const { deleteNoteById ,setCurrent,currentNote} = useNote();
  const [updateNote , setUpdateNote] = useState(false)

  const deleteMyNote = (_id) => {
    if (!window.confirm("Are you sure you want to delete the note")) {
      return;
    }
    deleteNoteById(_id);
  };

const handelEdit = (_note) =>{
  setCurrent(_note)
  setUpdateNote(true)
}

  return (
    <>
      <div className="card text-neutral-content card-body text-center text-white bg-gradient-to-br from-sky-700 to-indigo-700 justify-center w-full py-10 rounded-xl shadow-md max-w-sm my-10 shadow-xl shadow-blue-400">
        <h2 className="card-title">Note</h2>

        <p className="break-all text-left my-4">{note.information}</p>

        <div className="card-actions justify-end">
          <button onClick={() => deleteMyNote(note.id)} className="">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-red-500 hover:text-red-700"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </button>
          <button onClick={()=>handelEdit(note)} className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-blue-300  hover:text-blue-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
              />
            </svg>
          </button>
        </div>
        <div className=" text-white text-left">
          {note.createdAt.substring(0, 10)}
        </div>
      </div>
      <Modal open={updateNote} setOpen={setUpdateNote}>
        <UpdateNote 
        setUpdateNote={setUpdateNote}
        currentNote={currentNote}
        />
      </Modal>
    </>
  );
};

export default NoteCard;
