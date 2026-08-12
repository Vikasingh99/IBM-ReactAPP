import {
  createAsyncThunk,
  isRejected,
  isRejectedWithValue,
} from "@reduxjs/toolkit";
import { use } from "react";

export const registerUser = createAsyncThunk(
  "auth/registerUser",

  async (userData, { rejectedWithValue }) => {
    try {
      const response = await registerUserService(userData);
      return response;
    } catch (error) {
      return rejectedWithValue(
        error.response?.data?.message ||
          error.response?.data?.errors?.[0]?.msg ||
          error.message ||
          "registration failed",
      );
    }
  },
);
//export: like public
// const: like final
//createAsyncThunk: its a function which is used to create an async action.
// auth/registerUser: we passed this value as a name to identify action with this name.
// rejectedWithValue: if we want to reject the value we can use this function. ==> failure part.
