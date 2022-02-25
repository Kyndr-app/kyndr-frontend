import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Donor from "./Donor";
import Header from "./Layout/Header";

const DonorPages = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

const DonorRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<DonorPages />}>
        <Route path="/" index element={<Donor />} />
        {/* <Route path="donate" element={<Donor />} /> */}
        <Route path="*" element={<div />} />
      </Route>
    </Routes>
  );
};

export default DonorRoutes;
