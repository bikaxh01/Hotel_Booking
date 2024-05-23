import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./Slice/authSlice";

const store = configureStore({
    reducer:{
        userAuth:authSlice
    }
})

export default store