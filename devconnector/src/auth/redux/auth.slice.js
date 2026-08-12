import { createSlice } from "@reduxjs/toolkit";
import authState from "./auth.state";
import { act } from "react";
import { registerUser } from "./auth.thunk";

const authSlice = createSlice({
  name: "auth",
  initialState: authState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state) => {
      state.status = "loading";
      state.loading = true;
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload.data.user;
      state.token = action.payload.data.token;
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.status = "failed";
      state.loading = false;
      state.error = action.payload;
    });
  },
});

// slice is helping us to get the reducers.
export default authSlice.reducer;
