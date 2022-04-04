import React, { lazy, useEffect } from "react";
import { Outlet, Route, Routes, useNavigate } from "react-router-dom";
import { useFallback } from "../../routes/Routes";
import { getRandomElement } from "../../utils/extras";
import Header from "../Layout/Header";
const KYCSubmitted = lazy(() => import("./KYC-submitted"));
const KYCSuccess = lazy(() => import("./KYC-success"));
const Account = lazy(() => import("./Account"));
const CampaignPages = lazy(() => import("./Campaign"));
const Company = lazy(() => import("./Company"));
const Personal = lazy(() => import("./Personal"));
const Team = lazy(() => import("./Team"));
const Wallet = lazy(() => import("./Wallet"));
const Supporters = lazy(() => import("./Supporters"));
const KYC = lazy(() => import("./KYC"));
const Payment = lazy(() => import("./Payment"));
const Permission = lazy(() => import("./Permission"));

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
  {
    name: "Account",
    path: "account",
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

const C = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("./campaign", { replace: true });
  }, [navigate]);
  return null;
};

const Cause = () => {
  return (
    <Routes>
      <Route path="" element={<CausePages />}>
        <Route index element={useFallback(<C />)} />
        <Route path="account" element={useFallback(<Account />)} />
        <Route path="supporters" element={useFallback(<Supporters />)} />
        <Route path="permission" element={useFallback(<Permission />)} />
        <Route path="payments" element={useFallback(<Payment />)} />
        <Route path="team" element={useFallback(<Team />)} />
        <Route path="wallet" element={useFallback(<Wallet />)} />
        <Route path="campaign/*" element={useFallback(<CampaignPages />)} />
        <Route path="kyc">
          <Route
            index
            element={useFallback(getRandomElement([<KYC />, <KYCSuccess />]))}
          />
          <Route path="submitted" element={useFallback(<KYCSubmitted />)} />
          <Route path="company/*" element={useFallback(<Company />)} />
          <Route path="personal/*" element={useFallback(<Personal />)} />
        </Route>
        <Route path="*" element={<div />} />
      </Route>
    </Routes>
  );
};

export default Cause;
