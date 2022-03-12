import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Header from "../Layout/Header";
import Account from "./Account";
import Company from "./Company";
import KYC from "./KYC";
import Personal from "./Personal";
import Supporters from "./Supporters";

const links = [
  {
    name: "campaign",
    path: "campaign",
  },
  {
    name: "supporters",
    path: "supporters",
  },
  {
    name: "payments",
    path: "payments",
  },
  {
    name: "team",
    path: "team",
  },
  {
    name: "wallet",
    path: "wallet",
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
    title: "Account",
  },
  {
    title: "KYC",
  },
  {
    title: "Permission",
  },
  {
    title: "Logout",
  },
];

const CausePages = () => (
  <>
    <Header links={links} userMenu={userMenu} />
    <Outlet />
  </>
);

const Cause = () => {
  return (
    <Routes>
      <Route path="" element={<CausePages />}>
        <Route path="account" element={<Account />} />
        <Route path="supporters" element={<Supporters />} />

        <Route path="kyc">
          <Route index element={<KYC />} />
          <Route path="company/*" element={<Company />} />
          <Route path="personal/*" element={<Personal />} />
        </Route>
        <Route path="*" element={<div />} />
      </Route>
    </Routes>
  );
};

export default Cause;
