import React from "react";
import { Route, Routes, Outlet } from "react-router-dom";
import Header from "../Layout/Header";
import Data from "./Data";
const links = [
  {
    name: "data",
    path: "data",
  },
];

/**
 * Account
 * KYC
 * Permission
 * Logout
 */

const userMenu = [
  {
    title: "Logout",
  },
];
const AdminRoutes = () => (
  <>
    <Header links={links} userMenu={userMenu} />
    <Outlet />
  </>
);

const Admin = () => {
  return (
    <Routes>
      <Route path="" element={<AdminRoutes />}>
        <Route index element={<div />} />
        <Route path="data" element={<Data />} />
        <Route path="*" element={<div />} />
      </Route>
    </Routes>
  );
};

export default Admin;
