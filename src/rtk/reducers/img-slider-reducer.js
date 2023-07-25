import { createSlice } from "@reduxjs/toolkit";

const imgSliderSlice = createSlice({
    name: 'imgSlider',
    initialState: false,
    reducers: {
        changeStatus: (state) => {
            return !state;
        }
    }
})

export const { changeStatus } = imgSliderSlice.actions;
export default imgSliderSlice.reducer;