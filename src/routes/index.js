import { lazy } from "react";
import AboutCompany from "../views/AboutCompany";
import Register from "../views/Admin/Auth/Register";
import SignIn from "../views/Admin/Auth/SignIn";
import Landing from "../views/Landing";
import Partner from "../views/Partner";
import Purchaser from "../views/Purchaser";

const LandingMain = lazy(() => import("../views/Landing"));

export const ROUTES = [
  {
    path: "/",
    component: <Landing />,
  },
  {
    path: "/partner",
    component: <Partner />,
  },
  {
    path: "/about",
    component: <AboutCompany />,
  },
  {
    path: "/service",
    component: <Purchaser />,
  },
  {
    path: "/sign-in",
    component: <SignIn />,
  },
  {
    path: "/sign-up",
    component: <Register />,
  },
];
