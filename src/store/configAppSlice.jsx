import { createSlice } from "@reduxjs/toolkit";

const configAppSlice = createSlice({
    name:"appslice",
    initialState:{
        lang : "en",
    },
    reducers:{
        addLang : (state,action)=>{
            state.lang = action.payload;
        },
    }
})

export default configAppSlice.reducer;
export const {addLang} = configAppSlice.actions;