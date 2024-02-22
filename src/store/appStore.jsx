import { configureStore } from "@reduxjs/toolkit";
import astroReducer from "./AstroSlice"
import commentReducer from "./CommentsSlice"

const appStore = configureStore({
    reducer:{
        astro : astroReducer,
        comment : commentReducer,
    }
})
export default appStore;