import { lazy } from "react";
import Application from "../views/Admin/containers/Applications/Application";
import Home from "../views/Admin/containers/Home/Home"
import Partners from "../views/Admin/containers/Partners/Partners";
import Orders from "../views/Admin/containers/Orders/Orders";


const MainHome = lazy(() => import("../views/Admin/containers/Home/Home"));

export const ADMIN_ROUTES = [
  {
    path: "/",
    component: <Home/>,
  },
  {
    path: "/orders",
    component: <Orders/>,
  },
  {
    path: "/purchases",
    component: <h1>purchases</h1>,
  },
  {
    path: "/questions",
    component: <Application/>,
  },
  {
    path: "/partners",
    component: <Partners/>,
  },
];
