import React from "react";
import { Route, Routes } from "react-router-dom";
import Cause from "./Cause";
import Finalize from "./Finalize";
import Intro from "./Intro";
import JoinUs from "./JoinUs";
import Launch from "./Launch";
import Login from "./Login";
import Register from "./Register";
import Regulation from "./Regulation";
import Setup from "./Setup";

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

/**
 * Supporters
 * 1. join-us
 * 2. donor/login
 * 3. donor/finalize
 */

/**
 * Cause
 * 1. join-us
 * 2. ngo/register
 * 3. ngo/intro
 * 4. ngo/cause
 * 5. ngo/setup
 * 6. ngo/launch
 */

/**
 * Beneficiary
 * 1. join-us
 * 2. beneficiary/login
 * 3. beneficiary/finalize
 * 4. beneficiary/regulation
 */
const User = () => {
  return (
    <Routes>
      <Route path="">
        <Route index element={<JoinUs />} />
        <Route path="join-us" element={<JoinUs />} />
        <Route path="donor">
          <Route index element={<Login donor />} />
          <Route path="login" index element={<Login donor />} />
          <Route path="finalize" element={<Finalize donor />} />
        </Route>
        <Route path="beneficiary">
          <Route index element={<Login beneficiary />} />
          <Route path="login" index element={<Login beneficiary />} />
          <Route path="finalize" element={<Finalize beneficiary />} />
          <Route path="regulation" element={<Regulation beneficiary />} />
        </Route>
        <Route path="ngo">
          <Route index element={<Register ngo />} />
          <Route path="register" index element={<Register ngo />} />
          <Route path="intro" element={<Intro ngo />} />
          <Route path="cause" element={<Cause ngo />} />
          <Route path="setup" element={<Setup ngo />} />
          <Route path="launch" element={<Launch ngo />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default User;
