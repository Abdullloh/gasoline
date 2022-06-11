import { lazy } from "react";

const LandingMain = lazy(() => import("../views/Landing"))

export const ROUTES = [
    {
        path: "/",
        component: <LandingMain/>,
    }
]