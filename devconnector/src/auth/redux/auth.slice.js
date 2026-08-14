import { createSlice } from "@reduxjs/toolkit";
import authState from "./auth.state";
import { act } from "react";
import { registerUser, loginUser, loadUser, logoutUser } from "./auth.thunk";

const authSlice = createSlice({
  name: "auth",
  initialState: authState,
  reducers: {},
  extraReducers: (builder) => {
    // Load user
    builder.addCase(loadUser.pending, (state) => {
      state.status = "loading";
      state.loading = true;
      state.error = null;
    });

    builder.addCase(loadUser.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.loading = false;
      state.isAuthenticated = true;

      state.user = action.payload.data;

      state.error = null;
    });

    builder.addCase(loadUser.rejected, (state, action) => {
      state.status = "failed";
      state.loading = false;
      state.isAuthenticated = false;
      state.user = null;
      state.error = action.payload;
    });
    //================================Load User Original =============================================
    // builder.addCase(loadUser.pending, (state) => {
    //   state.status = "loading";
    //   state.loading = true;
    // });
    // builder.addCase(loadUser.fulfilled, (state, action) => {
    //   // console.log("LOAD USER PAYLOAD:", action.payload); // DEBUGGING PURPOSE
    //   state.status = "succeeded";
    //   state.loading = false;
    //   state.isAuthenticated = true;
    //   state.user = action.payload.data.user;
    //   state.token = action.payload.data.token;
    // });
    // builder.addCase(loadUser.rejected, (state, action) => {
    //   state.status = "failed";
    //   state.loading = false;
    //   state.error = action.payload;
    // });
    // ==================================================================================================
    // registerUser
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

    // LOGIN
    builder.addCase(loginUser.pending, (state) => {
      state.status = "loading";
      state.loading = true;
      state.error = null;
    });

    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload.data.user;
      state.token = action.payload.data.token;
      state.error = null;
    });

    builder.addCase(loginUser.rejected, (state, action) => {
      state.status = "failed";
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    });
    builder.addCase(logoutUser.fulfilled, (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.token = null;
      state.loading = false;
      state.status = "";
      state.error = null;
    });
  },
});

// slice is helping us to get the reducers.
export default authSlice.reducer;
