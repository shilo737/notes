import { configureStore } from "@reduxjs/toolkit";
import noteReducer from "./features/noteSlice";

const myStore = configureStore({
    reducer:{
        noteReducer
    }
})

export default myStore