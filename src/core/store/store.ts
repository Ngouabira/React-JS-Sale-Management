import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";


const store = configureStore({
   reducer: {
      auth: authSlice
   }
});

export default store;

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;