import { configureStore } from "@reduxjs/toolkit";
import { testReducer } from "./reducers/userReducer";

export const store = configureStore({
  reducer: {
    test: testReducer,
  },
});
