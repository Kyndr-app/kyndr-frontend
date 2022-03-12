import React from "react";
import { Route, Routes } from "react-router-dom";
import DocumentType from "./DocumentType";
import PanCard from "./PanCard";
import PersonalInfo from "./PersonalInfo";

const Personal = () => {
  return (
    <Routes>
      <Route path="info" element={<PersonalInfo />} />
      <Route path="pan-card" element={<PanCard />} />
      <Route path="document-type" element={<DocumentType />} />
    </Routes>
  );
};

export default Personal;
