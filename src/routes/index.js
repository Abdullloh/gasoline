import { lazy } from "react";
import AboutCompany from "../views/Landing/AboutCompany";
import Register from "../views/Admin/Auth/Register"
import SignIn from "../views/Admin/Auth/SignIn";
import Landing from "../views/Landing/Landing";
import Partner from "../views/Landing/Partner";
import Purchaser from "../views/Landing/Purchaser";

const LandingMain = lazy(() => import("../views/Landing/Landing"));

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
  {
    path: "/sign-up",
    component: <Register />,
  },
];
