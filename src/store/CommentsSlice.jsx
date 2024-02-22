
import { createSlice } from "@reduxjs/toolkit";

const CommentsSlice = createSlice({
    name:"comment",
    initialState: {
        comment: null,
    },
    reducers:{
        addComment:(state, action)=>{
            state.comment = action.payload;
        }
    }
})

export default CommentsSlice.reducer;
export const {addComment} = CommentsSlice.actions