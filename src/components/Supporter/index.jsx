import React, { lazy, useEffect } from "react";
import { Outlet, Route, Routes, useNavigate } from "react-router-dom";
import { useFallback } from "../../routes/Routes";
import Header from "../Layout/Header";
// Lazy load the routes
const Details = lazy(() => import("./Details"));
const Wallet = lazy(() => import("./Wallet"));
const Donate = lazy(() => import("./Donate"));
const DAO = lazy(() => import("./DAO"));
const Account = lazy(() => import("./Account"));
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

const D = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("./donate", { replace: true });
  }, [navigate]);
  return null;
};

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
        <Route index element={useFallback(<D />)} />
        <Route path="donate/details" index element={useFallback(<Details />)} />
        <Route path="wallet" element={useFallback(<Wallet />)} />
        <Route path="donate" element={useFallback(<Donate />)} />
        <Route path="dao" element={useFallback(<DAO />)} />
        <Route path="account" element={useFallback(<Account />)} />
        <Route path="*" element={<div />} />
      </Route>
    </Routes>
  );
};

export default DonorRoutes;
