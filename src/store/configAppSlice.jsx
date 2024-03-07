import { createSlice } from "@reduxjs/toolkit";

const configAppSlice = createSlice({
    name:"appslice",
    initialState:{
        lang : "en",
        form: false,
    },
    reducers:{
        addLang : (state,action)=>{
            state.lang = action.payload;
        },
        addForm: (state,action)=>{
            state.form = !state.form;
        },
        removeForm:(state,action)=>{
            state.form = false;
        }
    }
})

export default configAppSlice.reducer;
export const {addLang, addForm, removeForm} = configAppSlice.actions;