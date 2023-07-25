import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counterSlice',
    initialState: 1,
    reducers: {
        setCounter: (state, action) => {
            return state = state + action.payload;
        }
    }
})

export const { setCounter } = counterSlice.actions;
export default counterSlice.reducer;