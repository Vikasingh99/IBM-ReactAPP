import React from "react";
import { Route, Routes } from "react-router";

import { Login } from "./components/Login";
import { Signup } from "./components/Signup";

function AuthRouter() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default AuthRouter;
