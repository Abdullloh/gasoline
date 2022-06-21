import { lazy } from "react";
import Application from "../views/Admin/containers/Applications/Application";
import Home from "../views/Admin/containers/Home/Home";
import Partners from "../views/Admin/containers/Partners/Partners";
import Orders from "../views/Admin/containers/Orders/Orders";
import Purchases from "../views/Admin/containers/Purchases/Purchases";
import Addproduct from "../views/Admin/containers/AddProduct/Addproduct";
import Exchange from "../views/Admin/containers/Exchange/Exchange";


export const ADMIN_ROUTES = [
  {
    path: "/",
    component: <Home />,
  },
  {
    path: "/orders",
    component: <Orders />,
  },
  {
    path: "/purchases",
    component: <Purchases />,
  },
  {
    path: "/questions",
    component: <Application />,
  },
  {
    path: "/partners",
    component: <Partners />,
  },
  {
    path: "/add-product",
    component: <Addproduct />,
  },
  {
    path: "/exchanges",
    component: <Exchange />,
  },
];
