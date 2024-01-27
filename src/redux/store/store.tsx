import { configureStore } from "@reduxjs/toolkit";
import { chatReducer } from "../reducers/chatReducer";

//creating store 
export const store = configureStore({
    reducer:{
        chatReducer
    },
});