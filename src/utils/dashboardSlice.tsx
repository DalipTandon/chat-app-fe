import { createSlice } from "@reduxjs/toolkit";


const dashboardSlice=createSlice({
    name:"dashboard",
    initialState:null,
    //@ts-ignore
    reducers:{addData:(state,action)=>{
        return action.payload;
    }}
})
export const{addData}=dashboardSlice.actions;
export default dashboardSlice.reducer;