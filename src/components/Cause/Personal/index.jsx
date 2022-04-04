import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { useFallback } from "../../../routes/Routes";
const DocumentType = lazy(() => import("./DocumentType"));
const PanCard = lazy(() => import("./PanCard"));
const PersonalInfo = lazy(() => import("./PersonalInfo"));

const Personal = () => {
  return (
    <Routes>
      <Route path="info" element={useFallback(<PersonalInfo />)} />
      <Route path="pan-card" element={useFallback(<PanCard />)} />
      <Route path="document-type" element={useFallback(<DocumentType />)} />
    </Routes>
  );
};

export default Personal;
