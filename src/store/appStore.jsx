import { configureStore } from "@reduxjs/toolkit";
import astroReducer from "./AstroSlice"
import commentReducer from "./CommentsSlice"
import userReducer from "./userSlice"


const appStore = configureStore({
    reducer:{
        astro : astroReducer,
        comment : commentReducer,
        user: userReducer,
    }
})
export default appStore;