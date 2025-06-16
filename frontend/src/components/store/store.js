 import { configureStore } from "@reduxjs/toolkit"
import authReducers from "../../slices/authSlice"

export default configureStore({
    reducer:{
        auth:authReducers
    }
})
