import { configureStore } from "@reduxjs/toolkit";
import { resendOTPReducer, userReducer } from "./reducers/userReducer";

export const store = configureStore({
  reducer: {
    user: userReducer,
    resendOTP: resendOTPReducer,
  },
});
