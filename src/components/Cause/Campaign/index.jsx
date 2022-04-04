import { Paper } from "@mui/material";
import React, { lazy } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import { useFallback } from "../../../routes/Routes";
// Lazily load the components
const Campaign = lazy(() => import("./Campaign"));
const Cause = lazy(() => import("./Cause"));
const Details = lazy(() => import("./Details"));
const Intro = lazy(() => import("./Intro"));
const Launch = lazy(() => import("./Launch"));
const Setup = lazy(() => import("./Setup"));

const AddPages = () => {
  return (
    <div className="">
      <Paper className="py-5 my-10 mx-auto max-w-[750px] px-10 justify-between">
        <Outlet />
      </Paper>
    </div>
  );
};

const CampaignPages = () => {
  return (
    <Routes>
      <Route path="">
        <Route index element={useFallback(<Campaign />)} />
        <Route path="details" element={useFallback(<Details />)} />
        <Route path="add" element={<AddPages />}>
          <Route path="intro" element={useFallback(<Intro />)} />
          <Route path="cause" element={useFallback(<Cause />)} />
          <Route path="setup" element={useFallback(<Setup />)} />
          <Route path="launch" element={useFallback(<Launch />)} />
        </Route>
      </Route>
    </Routes>
  );
};

export default CampaignPages;
