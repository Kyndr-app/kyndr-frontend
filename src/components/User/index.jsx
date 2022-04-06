import React, { lazy, useEffect } from "react";
import { Route, Routes, Outlet, useLocation } from "react-router-dom";
import useLocalStorageState from "../../hooks/useLocalStorageState";
import { useFallback } from "../../routes/Routes";
import Layout from "./Layout";

const Cause = lazy(() => import("./Cause"));
const Finalize = lazy(() => import("./Finalize"));
const Intro = lazy(() => import("./Intro"));
const JoinUs = lazy(() => import("./JoinUs"));
const Launch = lazy(() => import("./Launch"));
const Setup = lazy(() => import("./Setup"));
const Login = lazy(() => import("./Login"));
const Register = lazy(() => import("./Register"));
const Regulation = lazy(() => import("./Regulation"));

/**
 * 1. Join Us
 * 2. Register
 * 3. Intro
 * 4. Cause
 * 5. Setup
 * 6. Launch
 * 7. Organization Info
 * 8. Finalize
 * 9. Login
 */

/**
 * Supporters
 * 1. join-us
 * 2. donor/login
 * 3. donor/finalize
 */

/**
 * Cause
 * 1. join-us
 * 2. ngo/register
 * 3. ngo/intro
 * 4. ngo/cause
 * 5. ngo/setup
 * 6. ngo/launch
 */

/**
 * Beneficiary
 * 1. join-us
 * 2. beneficiary/login
 * 3. beneficiary/finalize
 * 4. beneficiary/regulation
 */
const LayoutItem = ({ type }) => (
  <Layout type={type} className="py-10 px-28 justify-between">
    <Outlet />
  </Layout>
);
const User = () => {
  const [type, setType] = useLocalStorageState("type", "donor");
  const location = useLocation();
  useEffect(() => {
    if (location.pathname.includes("cause")) {
      setType("cause");
    } else if (location.pathname.includes("beneficiary")) {
      setType("beneficiary");
    } else if (location.pathname.includes("supporter")) {
      setType("supporter");
    }
  }, [location.pathname, setType]);
  return (
    <Routes>
      <Route path="" element={<LayoutItem type={type} />}>
        <Route
          index
          element={useFallback(<JoinUs type={type} setType={setType} />)}
        />
        <Route
          path="join-us"
          element={useFallback(<JoinUs type={type} setType={setType} />)}
        />
        <Route path=":id">
          <Route path="login" element={useFallback(<Login />)} />
          <Route path="register" element={useFallback(<Register />)} />
        </Route>
        <Route path="supporter">
          <Route
            path="finalize"
            element={useFallback(<Finalize primary="STEP 02/02" supporter />)}
          />
        </Route>
        <Route path="beneficiary">
          <Route
            path="finalize"
            element={useFallback(<Finalize primary="STEP 02/03" beneficiary />)}
          />
          <Route
            path="regulation"
            element={useFallback(
              <Regulation primary="STEP 03/03" beneficiary />
            )}
          />
        </Route>
        <Route path="cause">
          <Route
            path="intro"
            element={useFallback(<Intro primary="STEP 02/05" cause />)}
          />
          <Route
            path="cause"
            element={useFallback(<Cause primary="STEP 03/05" cause />)}
          />
          <Route
            path="setup"
            element={useFallback(<Setup primary="STEP 04/05" cause />)}
          />
          <Route
            path="launch"
            element={useFallback(<Launch primary="STEP 05/05" cause />)}
          />
        </Route>
      </Route>
    </Routes>
  );
};

export default User;
