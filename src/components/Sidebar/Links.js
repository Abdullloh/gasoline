import { lazy } from "react";
import { BiCategory } from "react-icons/bi";
import { IoFastFoodOutline } from "react-icons/io5";
import { CategoryIcon, HomeIcon, OrdersIcon, PartnerIcon, PurchasesIcon, UserIcon } from "../../utils/Images";
import { FoodsIcon } from "../../utils/Images";
import { OrderListIcon } from "../../utils/Images";
import { DashboardIcon } from "../../utils/Images";

const OrderList = lazy(() => import("../../views/OrderList"));
const SignUp = lazy(() => import("../../views/Auth/SignUp"));
const SignIn = lazy(() => import("../../views/Auth/SignIn"));
const Category = lazy(() => import("../../views/Category"));
const Foods = lazy(() => import("../../views/Foods"));
const Dashboard = lazy(() => import("../../views/Dashboard"));

export default [
  {
    path: "/admin",
    element: Dashboard,
    icon: <HomeIcon size={24} />,
    title: "Главная",
  },
  {
    path: "/admin/orders",
    element: Foods,
    icon: <OrdersIcon size={24} />,
    title: "Заказы",
  },
  {
    path: "/admin/purchases",
    element: Category,
    icon: <PurchasesIcon size={24} />,
    title: "Покупки",
  },
  {
    path: "/admin/questions",
    element: OrderList,
    icon: <UserIcon size={24} />,
    title: "Заявки и вопросы",
  },
  {
    path: "/admin/partners",
    element: OrderList,
    icon: <PartnerIcon size={24} />,
    title: "Партнеры",
  },
];
