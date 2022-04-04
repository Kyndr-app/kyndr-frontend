import React, { lazy } from "react";
import { Route, Routes, Outlet } from "react-router-dom";
import { useFallback } from "../../routes/Routes";
const Header = lazy(() => import("../Layout/Header"));
const Data = lazy(() => import("./Data"));

const links = [
  {
    name: "data",
    path: "data",
  },
];

const userMenu = [
  {
    title: "Logout",
  },
];
const AdminRoutes = () => (
  <>
    {useFallback(<Header links={links} userMenu={userMenu} />)}
    <Outlet />
  </>
);

const Admin = () => (
  <Routes>
    <Route path="" element={<AdminRoutes />}>
      <Route index element={useFallback(<Data />)} />
      <Route path="data" element={useFallback(<Data />)} />
      <Route path="*" element={<div />} />
    </Route>
  </Routes>
);

export default Admin;
