import { configureStore } from "@reduxjs/toolkit";
import astroReducer from "./AstroSlice"
import commentReducer from "./CommentsSlice"
import userReducer from "./userSlice"
import followReducer from "./followSlice"


const appStore = configureStore({
    reducer:{
        astro : astroReducer,
        comment : commentReducer,
        user: userReducer,
        follow: followReducer,
    }
})
export default appStore;