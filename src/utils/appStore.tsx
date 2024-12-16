import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import dashboardReducer from "./dashboardSlice"
import messageReducer from "./messageSlice"
const appStore=configureStore({
    reducer:{
        user:userReducer,
        dashboard:dashboardReducer,
        message:messageReducer,
    }
})

export default appStore;