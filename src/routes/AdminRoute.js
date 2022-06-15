import { lazy } from "react";
import AboutCompany from "../views/AboutCompany";
import Register from "../views/Admin/Auth/Register";
import SignIn from "../views/Admin/Auth/SignIn";
import Landing from "../views/Landing/Landing";
import Partner from "../views/Partner";
import Purchaser from "../views/Purchaser";

const LandingMain = lazy(() => import("../views/Landing/Landing"));

export const ADMIN_ROUTES = [
  {
    path: "/",
    component: Dashboard,
  },
  {
    path: "/orders",
    component: Foods,
  },
  {
    path: "/purchases",
    component: Category,
  },
  {
    path: "/questions",
    component: OrderList,
  },
  {
    path: "/partners",
    component: OrderList,
  },
];
