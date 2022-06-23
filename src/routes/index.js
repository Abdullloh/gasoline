import { lazy } from "react";
import AboutCompany from "../views/Landing/AboutCompany";
import Register from "../views/Admin/Auth/Register";
import SignIn from "../views/Admin/Auth/SignIn";
import AdminSignIn from "../views/Admin/Auth/AdminSignIn";
import Landing from "../views/Landing/Landing";
import Partner from "../views/Landing/Partner";
import Purchaser from "../views/Landing/Purchaser";
import ProductView from "../views/ProductView/ProductView";
import UserAccount from "../views/UserAccount/UserAccount";
import EditProduct from "../views/Admin/containers/EditProduct";

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
  {
    path: "/products",
    component: <ProductView />,
  },
  {
    path: "/my-account",
    component: <UserAccount />,
  },
  {
    path: "/admin-auth",
    component: <AdminSignIn />,
  }
];
