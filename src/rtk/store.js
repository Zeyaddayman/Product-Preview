import { configureStore } from "@reduxjs/toolkit";
import sideBarReducer from "./reducers/side-bar-reducer.js";
import imgSliderReducer from "./reducers/img-slider-reducer.js";
import counterReducer from "./reducers/counter-reducer.js";
import cartReducer from "./reducers/cart-reducer.js";


export const store = configureStore({
    reducer: {
        sidebar: sideBarReducer,
        imgSlider: imgSliderReducer,
        counter: counterReducer,
        cart: cartReducer
    }
})