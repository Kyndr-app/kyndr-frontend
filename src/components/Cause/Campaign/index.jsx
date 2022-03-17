import { Paper } from "@mui/material";
import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Campaign from "./Campaign";
import Cause from "./Cause";
import Details from "./Details";
import Intro from "./Intro";
import Launch from "./Launch";
import Setup from "./Setup";

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
        <Route index element={<Campaign />} />
        <Route path="details" element={<Details />} />
        <Route path="add" element={<AddPages />}>
          <Route path="intro" element={<Intro />} />
          <Route path="cause" element={<Cause />} />
          <Route path="setup" element={<Setup />} />
          <Route path="launch" element={<Launch />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default CampaignPages;
