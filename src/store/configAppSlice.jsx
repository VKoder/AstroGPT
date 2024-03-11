import { createSlice } from "@reduxjs/toolkit";

const configAppSlice = createSlice({
    name:"appslice",
    initialState:{
        lang : "en",
        form: false,
        Limit: null,
        Bot: false,
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
        },
        addLimit:(state, action)=>{
            state.Limit =  action.payload;
        },
        addBot:(state,action)=>{
            state.Bot = !state.Bot
        }
       
        
    }
})

export default configAppSlice.reducer;
export const {addLang, addForm, removeForm, addLimit,addBot} = configAppSlice.actions;