import React from "react";
import { Route, Routes } from "react-router-dom";
import JoinUs from "./JoinUs";

/**
 * 1. Join Us
 * 2. Register
 * 3. Intro
 * 4. Cause
 * 5. Setup
 * 6. Launch
 * 7. Organization Info
 * 8. Finalize
 * 9. Login
 */

const User = () => {
  return (
    <Routes>
      <Route path="">
        <Route path="join-us" element={<JoinUs />} />
      </Route>
    </Routes>
  );
};

export default User;
