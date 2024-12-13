import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import dashboardReducer from "./dashboardSlice"
const appStore=configureStore({
    reducer:{
        user:userReducer,
        dashboard:dashboardReducer,
    }
})

export default appStore;