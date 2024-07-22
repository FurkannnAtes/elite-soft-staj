import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./features/counter";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
});
