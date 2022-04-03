import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Details from "./Details";
import Header from "../Layout/Header";
import Wallet from "./Wallet";
import Donate from "./Donate";
import DAO from "./DAO";
import Account from "./Account";

/**
 * 1. Donate
 * 2. DAO
 * 3. Wallet
 * 4. Stake (Coming Soon)
 * 5. NFT Market (Coming Soon)
 */

const links = [
  {
    name: "Donate",
    path: "donate",
  },
  {
    name: "DAO",
    path: "dao",
  },
  {
    name: "Wallet",
    path: "wallet",
  },
  {
    name: "Account",
    path: "account",
  },
];

const userMenu = [
  {
    title: "Logout",
  },
];

const DonorPages = () => {
  return (
    <>
      <Header links={links} userMenu={userMenu} />
      <Outlet />
    </>
  );
};

const DonorRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<DonorPages />}>
        <Route index element={<Donate />} />
        <Route path="donate/details" index element={<Details />} />
        <Route path="wallet" element={<Wallet />} />
        <Route path="donate" element={<Donate />} />
        <Route path="dao" element={<DAO />} />
        <Route path="account" element={<Account />} />
        <Route path="*" element={<div />} />
      </Route>
    </Routes>
  );
};

export default DonorRoutes;
