import React, { lazy, useEffect } from "react";
import { Outlet, Route, Routes, useNavigate } from "react-router-dom";
import { useFallback } from "../../routes/Routes";
import { getRandomElement } from "../../utils/extras";
// lazy load above components
const Header = lazy(() => import("../Layout/Header"));
const Account = lazy(() => import("./Account"));
const Company = lazy(() => import("./Company"));
const Personal = lazy(() => import("./Personal"));
const KYC = lazy(() => import("./KYC"));
const Wallet = lazy(() => import("./Wallet"));
const KYCSubmitted = lazy(() => import("./KYC-submitted"));
const KYCSuccess = lazy(() => import("./KYC-success"));

const links = [
  {
    name: "Wallet",
    path: "wallet",
  },
  {
    name: "Account",
    path: "account",
  },
  {
    name: "KYC",
    path: "kyc",
  },
];

const userMenu = [
  {
    title: "Logout",
  },
];

const B = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("./wallet", { replace: true });
  }, [navigate]);
  return null;
};

const BeneficiaryPages = () => (
  <>
    {useFallback(<Header links={links} userMenu={userMenu} />)}
    <Outlet />
  </>
);

const Beneficiary = () => {
  return (
    <Routes>
      <Route path="" element={<BeneficiaryPages />}>
        <Route index element={useFallback(<B />)} />
        <Route path="wallet" element={useFallback(<Wallet />)} />
        <Route path="account" element={useFallback(<Account />)} />
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

export default Beneficiary;
