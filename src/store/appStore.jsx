import { configureStore } from "@reduxjs/toolkit";
import astroReducer from "./AstroSlice"
import commentReducer from "./CommentsSlice"
import appReducer from "./appSlice"

const appStore = configureStore({
    reducer:{
        astro : astroReducer,
        comment : commentReducer,
        app: appReducer,
    }
})
export default appStore;