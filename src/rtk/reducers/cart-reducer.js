import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cartSlice',
    initialState: [],
    reducers: {
        addItem: (state, action) => {
            state[0] = action.payload;
        },
        removeItem: (state, action) => {
            state.splice(action.payload, 1);
        }
    }
})

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;