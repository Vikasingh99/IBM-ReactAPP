import React from "react";
import { Route, Routes } from "react-router";

import Landing from "./core/components/layout/Landing";
import AuthRouter from "./auth/AuthRouter";
import { Dashboard } from "./dashboard/component/Dashboard";
import { DashboardRouter } from "./dashboard/DashboardRouter";

function RootRouter() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/auth/*" element={<AuthRouter />} />
      <Route path="/dashboard/*" element={<DashboardRouter />} />
    </Routes>
  );
}

export default RootRouter;
