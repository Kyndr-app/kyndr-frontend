import React from "react";
import { Route, Routes } from "react-router-dom";
import CorporateInfo from "./CorporateInfo";
import DocumentInfo from "./DocumentInfo";

const Company = () => {
  return (
    <Routes>
      <Route path="info" element={<CorporateInfo />} />
      <Route path="document-info" element={<DocumentInfo />} />
    </Routes>
  );
};

export default Company;
