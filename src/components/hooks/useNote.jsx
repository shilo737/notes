import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addNote, deleteNote, getAllNote, putNote, setCurrentNote } from '../../redux/features/noteSlice';

const useNote = () => {
const {notes,currentNote} = useSelector((store)=> store.noteReducer)
const dispatch = useDispatch()

const getAllNotes = () =>{
    dispatch(getAllNote())
}
const addNewNote = (_bodyData) =>{
    dispatch(addNote(_bodyData))
}

const deleteNoteById = (_id) =>{
    dispatch(deleteNote(_id))
}

const updateNote = (_bodyData) =>{
    dispatch(putNote(_bodyData))
}

const setCurrent = (_note) =>{
    dispatch(setCurrentNote(_note))
}


return {
    notes,
    getAllNotes,
    addNewNote,
    deleteNoteById,
    updateNote,
    setCurrent,
    currentNote
}

}

export default useNote