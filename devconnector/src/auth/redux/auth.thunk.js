import {
  createAsyncThunk,
  isRejected,
  isRejectedWithValue,
} from "@reduxjs/toolkit";
// import { use } from "react";
import {
  loadUserService,
  registerUserService,
} from "../../auth/components/service/auth.service";
import { loginUserService } from "../../auth/components/service/auth.service";

export const loadUser = createAsyncThunk(
  "auth/loadUser",
  async (_, { rejectWithValue }) => {
    try {
      const response = await loadUserService();
      return response;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message ||
          error.response?.data.errors?.[0]?.msg ||
          error.message ||
          "loading user failed",
      );
    }
  },
);

export const registerUser = createAsyncThunk(
  "auth/registerUser",

  async (userData, { rejectWithValue }) => {
    try {
      const response = await registerUserService(userData);
      localStorage.setItem("token", response.data.token);
      // navigate("/dashboard");
      return response;
    } catch (error) {
      return rejectWithValue(
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

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await loginUserService(userData);
      localStorage.setItem("token", response.data.token);
      // navigate("/dashboard");
      return response;
    } catch (error) {
      return rejectWithValue(
        error.data?.message ||
          error.data?.errors?.[0]?.msg ||
          error.message ||
          "Login failed",
      );
    }
  },
);
