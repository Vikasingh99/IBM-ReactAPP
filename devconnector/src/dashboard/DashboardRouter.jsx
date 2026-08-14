import React from "react";
import { Routes, Route } from "react-router";
import { Dashboard } from "./component/Dashboard";
export const DashboardRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/create-profile" element={<CreateProfile />} />
        <Route path="/add-experience" element={<AddExperience />} />
        <Route path="/add-education" element={<AddEducation />} />
      </Routes>
    </>
  );
};
