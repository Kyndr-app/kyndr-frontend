import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Donor from "./Donor";
import Header from "../Layout/Header";

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
    name: "Stake (Coming Soon)",
    path: "stake",
  },
  {
    name: "NFT Market (Coming Soon)",
    path: "nft-market",
  },
];

const DonorPages = () => {
  return (
    <>
      <Header links={links} />
      <Outlet />
    </>
  );
};

const DonorRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<DonorPages />}>
        <Route path="/" index element={<Donor />} />
        {/* <Route path="donate" element={<Donor />} /> */}
        <Route path="*" element={<div />} />
      </Route>
    </Routes>
  );
};

export default DonorRoutes;
