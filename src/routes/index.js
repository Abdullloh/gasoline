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
import LandingNews from "../views/Landing/LandingNews/LandingNews";
import NewsDetail from "../views/Landing/LandingNews/NewsDetail";

const LandingMain = lazy(() => import("../views/Landing/Landing"));



let role = JSON.parse(localStorage.getItem("user_info"))?.data?.user?.role


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
    path: "/news",
    component: <LandingNews />,
  },
  {
    path: "/news/:newsId",
    component: <NewsDetail />,
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
      // role ? <Navigate exact = {true}  to = "/my-account"/> : null
      component: <UserAccount />,
  },
  {
    path: "/admin-auth",
    component: <AdminSignIn />,
  }
];
