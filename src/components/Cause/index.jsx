import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Header from "../Layout/Header";
import Account from "./Account";
import CampaignPages from "./Campaign";
import Campaign from "./Campaign/Campaign";
import Company from "./Company";
import KYC from "./KYC";
import Payment from "./Payment";
import Permission from "./Permission";
import Personal from "./Personal";
import Supporters from "./Supporters";
import Team from "./Team";

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
        <Route index element={<Campaign />} />
        <Route path="account" element={<Account />} />
        <Route path="supporters" element={<Supporters />} />
        <Route path="permission" element={<Permission />} />
        <Route path="payments" element={<Payment />} />
        <Route path="team" element={<Team />} />
        <Route path="campaign/*" element={<CampaignPages />} />
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
