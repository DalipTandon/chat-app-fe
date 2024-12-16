import { createSlice } from "@reduxjs/toolkit";

const messageSlice = createSlice({
    name: "message",
    initialState: [], // Ensure initial state is an array
    reducers: {
        addMessage: (state, action) => {
            //@ts-ignore
            state.push(action.payload);
        },
    },
});

export const { addMessage } = messageSlice.actions;
export default messageSlice.reducer;
