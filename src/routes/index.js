import { lazy } from "react";
import AboutCompany from "../views/AboutCompany";
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
];
