import React from "react";
import { Route, Routes } from "react-router-dom";
import Beneficiary from "../components/Beneficiary";
import Donor from "../components/Donor";
import Cause from "../components/Cause";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<div>HOME</div>} />
        <Route path="beneficiary/*" element={<Beneficiary />} />
        <Route path="cause/*" element={<Cause />} />
        <Route path="donor/*" element={<Donor />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
