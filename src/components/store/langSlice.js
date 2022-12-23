import { createSlice } from "@reduxjs/toolkit";

export const langSlice=createSlice({
    name:"language",
    initialState:{
        webLanguage:"english"
    },
    reducers:{
        toEnglish:state=>{
            state.webLanguage="english"
            console.log("hit reducer english"+state.webLanguage)
        },
        toKannada:state=>{
            state.webLanguage="kannada"
            console.log("hit reducer kannada"+state.webLanguag)
        }
    }
})

export const{toEnglish,toKannada}=langSlice.actions;
export default langSlice.reducer;