import React from "react";
import { Route, Routes } from "react-router-dom";
import Beneficiary from "../components/Beneficiary";
import Donor from "../components/Donor";
import Cause from "../components/Cause";
import User from "../components/User";

/**
 * 1. User
 * 2. Admin
 * 3. Beneficiary
 * 4. Donor
 * 5. Cause
 */

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<User />} />
        <Route path="user/*" element={<User />} />
        <Route path="beneficiary/*" element={<Beneficiary />} />
        <Route path="cause/*" element={<Cause />} />
        <Route path="donor/*" element={<Donor />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
