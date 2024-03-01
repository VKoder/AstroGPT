import { createSlice } from "@reduxjs/toolkit";

const followSlice = createSlice({
    name:"follow",
    initialState:({
        follow:[],
    }),
    reducers:{
        addFollow:(state,action)=>{
            state.follow.push(action.payload);
        },
        clearFollow:(state, action)=>{
            state.follow.length = 0;
        },
        removeFollow:(state,action)=>{
            const index = state.follow.findIndex(item => item === action.payload);
            if (index !== -1) {
                state.follow.splice(index, 1);
            }
        }
        
    }
})

export default followSlice.reducer;
export const {addFollow, clearFollow, removeFollow} = followSlice.actions;