import { configureStore } from "@reduxjs/toolkit"
import { getDetailsReducer } from "./reducer/getUserReducer";

const store = configureStore({
    reducer: {
        info: getDetailsReducer
    }
});

export default store;
export const server = "https://jobtaskbackend.onrender.com/api"