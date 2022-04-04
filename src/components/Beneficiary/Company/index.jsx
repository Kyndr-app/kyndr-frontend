import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { useFallback } from "../../../routes/Routes";
const CorporateInfo = lazy(() => import("./CorporateInfo"));
const DocumentInfo = lazy(() => import("./DocumentInfo"));

const Company = () => {
  return (
    <Routes>
      <Route path="info" element={useFallback(<CorporateInfo />)} />
      <Route path="document-info" element={useFallback(<DocumentInfo />)} />
    </Routes>
  );
};

export default Company;
