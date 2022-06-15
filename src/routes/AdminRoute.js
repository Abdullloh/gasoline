import { lazy } from "react";
import Home from "../views/Admin/containers/Home/Home"
import Partners from "../views/Admin/containers/Partners/Partners";


const MainHome = lazy(() => import("../views/Admin/containers/Home/Home"));

export const ADMIN_ROUTES = [
  {
    path: "/",
    component: <Home/>,
  },
  {
    path: "/orders",
    component: <h1>orders</h1>,
  },
  {
    path: "/purchases",
    component: <h1>purchases</h1>,
  },
  {
    path: "/questions",
    component: <h1>questions</h1>,
  },
  {
    path: "/partners",
    component: <Partners/>,
  },
];
