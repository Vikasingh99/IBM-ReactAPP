import React from "react";
import { Routes, Route } from "react-router";
import { Dashboard } from "./component/Dashboard";
import Editprofile from "./component/Editprofile";
import AddExperience from "./component/Editprofile";
import AddEducation from "./component/Editprofile";

export const DashboardRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />

      <Route path="/create-profile" element={<Editprofile />} />

      <Route path="/add-experience" element={<AddExperience />} />

      <Route path="/add-education" element={<AddEducation />} />
    </Routes>
  );
};
