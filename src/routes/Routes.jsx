import { CircularProgress } from "@mui/material";
import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
// Lazily load routes and code split with webpack
const Beneficiary = lazy(() => import("../components/Beneficiary"));
const Supporter = lazy(() => import("../components/Supporter"));
const Cause = lazy(() => import("../components/Cause"));
const User = lazy(() => import("../components/User"));
const Admin = lazy(() => import("../components/Admin"));

export const useFallback = (el) => (
  <Suspense
    fallback={
      <div className="h-screen flex w-full items-center justify-center">
        <CircularProgress size={80} />
      </div>
    }
  >
    {el}
  </Suspense>
);

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={useFallback(<User />)} />
        <Route path="user/*" element={useFallback(<User />)} />
        <Route path="beneficiary/*" element={useFallback(<Beneficiary />)} />
        <Route path="cause/*" element={useFallback(<Cause />)} />
        <Route path="supporter/*" element={useFallback(<Supporter />)} />
        <Route path="admin/*" element={useFallback(<Admin />)} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
