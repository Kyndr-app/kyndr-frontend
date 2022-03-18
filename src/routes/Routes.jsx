import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
// Lazily load routes and code split with webpack
const Beneficiary = lazy(() => import("../components/Beneficiary"));
const Donor = lazy(() => import("../components/Donor"));
const Cause = lazy(() => import("../components/Cause"));
const User = lazy(() => import("../components/User"));
const Admin = lazy(() => import("../components/Admin"));

/**
 * 1. User
 * 2. Admin
 * 3. Beneficiary
 * 4. Donor
 * 5. Cause
 */

const useFallback = (el) => <Suspense fallback={<div></div>}>{el}</Suspense>;

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={useFallback(<User />)} />
        <Route path="user/*" element={useFallback(<User />)} />
        <Route path="beneficiary/*" element={useFallback(<Beneficiary />)} />
        <Route path="cause/*" element={useFallback(<Cause />)} />
        <Route path="donor/*" element={useFallback(<Donor />)} />
        <Route path="admin/*" element={useFallback(<Admin />)} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
