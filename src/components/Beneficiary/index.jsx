import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Header from "../Layout/Header";
import Account from "./Account";
import CorporateInfo from "./CorporateInfo";
import KYC from "./KYC";
import PersonalInfo from "./PersonalInfo";
import Wallet from "./Wallet";

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

const BeneficiaryPages = () => (
  <>
    <Header links={links} userMenu={userMenu} />
    <Outlet />
  </>
);

const Beneficiary = () => {
  return (
    <Routes>
      <Route path="" element={<BeneficiaryPages />}>
        <Route path="wallet" element={<Wallet />} />
        <Route path="account" element={<Account />} />
        <Route path="kyc">
          <Route index element={<KYC />} />
          <Route path="company">
            <Route path="info" element={<CorporateInfo />} />
          </Route>
          <Route path="personal">
            <Route path="info" element={<PersonalInfo />} />
          </Route>
        </Route>
        <Route path="*" element={<div />} />
      </Route>
    </Routes>
  );
};

export default Beneficiary;
