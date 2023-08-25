import { createSlice } from "@reduxjs/toolkit";



const noteSlice = createSlice({
    name: "note",
    initialState: {
        notes: [],
        currentNote:null
    },
    reducers: {
        addNote: (state, action) => {
            const noteObj = action.payload;
            noteObj.id = Date.now(); // Makes a date that will be unique
            noteObj.createdAt = new Date().toISOString();
            if (noteObj) {
                state.notes.unshift(noteObj);
                saveInLocalStorage(state.notes); // Save only the updated notes array
            }
        },
        getAllNote: (state) => {
            const note = localStorage.getItem('note');
            state.notes = note ? JSON.parse(note) : [];
        },
        deleteNote:(state,action)=>{
            state.notes = state.notes.filter(note=> note.id !== action.payload)
            saveInLocalStorage(state.notes)
        },
        putNote:(state,action)=>{
            state.notes.forEach((note,i)=>{
                if(note.id === action.payload.id){
                    state.notes[i]= action.payload
                    saveInLocalStorage(state.notes)
                }
            }) 
        },
        setCurrentNote:(state,action)=>{
            state.currentNote = action.payload
        },
        

    }
});

const saveInLocalStorage = (notes) => {
    localStorage.setItem('note', JSON.stringify(notes)); // Save only the updated notes
}

export const { addNote, getAllNote,deleteNote,putNote,setCurrentNote } = noteSlice.actions;
export default noteSlice.reducer;

