import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from "../redux/features/authSlice.js"



const store = configureStore({
    reducer: {
        authRed: authSliceReducer,

    },
});

export default store;