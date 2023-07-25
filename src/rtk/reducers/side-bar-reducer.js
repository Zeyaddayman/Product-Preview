import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState: false,
    reducers: {
        changeStatus: (state) => {
            return !state;
        }
    }
})

export const { changeStatus } = sidebarSlice.actions;
export default sidebarSlice.reducer;