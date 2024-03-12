import { createSlice } from "@reduxjs/toolkit";

const AstroSlice = createSlice({
    name :"AstroSlice",
    initialState:{
        chatList:null,
        callList:null,
        astroProfile:null,
        horoscope: null,
    },
    reducers:{
        addChat:(state,action)=>{
            state.chatList = action.payload;
        },
        addCall :(state, action)=>{
            state.callList = action.payload;
        },
        addAstroProfile:(state,action)=>{
            state.astroProfile = action.payload;
        },
        addHoroscope:(state, action)=>{
            state.horoscope = action.payload;
        }
    }
})
export default AstroSlice.reducer;
export const {addChat, addCall,addAstroProfile , addHoroscope} = AstroSlice.actions;