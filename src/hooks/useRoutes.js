import React, { lazy } from "react";
import SignUp from "../pages/SignUp";
const Login = lazy(() => import("../pages/Login"));
const Home = lazy(() => import("../pages/Home"));

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/sign-in",
    element: <Login />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
];

function useRoutes() {
  return routes;
}

export default useRoutes;
