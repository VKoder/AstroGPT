import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "App",
    initialState:null,
    reducers:{
        addUser:(state,action)=>{
            return action.payload;
        },
        removeUser:(state,action)=>{
            return null;
        }
    }
})
export const {addUser,removeUser} = appSlice.actions;
export default appSlice.reducer;