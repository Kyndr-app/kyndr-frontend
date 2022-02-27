import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Header from "../Layout/Header";
import Wallet from "./Wallet";

/**
 * 1. Wallet
 * 2. Account
 * 3. KYC
 */

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

const BeneficiaryPages = () => (
  <>
    <Header links={links} />
    <Outlet />
  </>
);

const Beneficiary = () => {
  return (
    <Routes>
      <Route path="" element={<BeneficiaryPages />}>
        <Route path="wallet" element={<Wallet />} />
        <Route path="*" element={<div />} />
      </Route>
    </Routes>
  );
};

export default Beneficiary;
