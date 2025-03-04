import { configureStore } from "@reduxjs/toolkit";
import shoppingReducer from "./shoppingSlice";
import  userReducer from "./user";

export const store = configureStore({
    reducer:{
      shopping:shoppingReducer,
      user:userReducer,
    },
})
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;