import React from "react";
import { Routes, Route } from "react-router";
import { Dashboard } from "./component/Dashboard";
export const DashboardRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </>
  );
};
