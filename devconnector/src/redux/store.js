import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../auth/redux/auth.slice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
