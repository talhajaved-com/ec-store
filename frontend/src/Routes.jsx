import { useRoutes, Navigate } from "react-router-dom";
import AuthGuard from "./components/AuthGuard";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import NotFoundPage from "./components/NotFound";
import UserProfile from "./user/UserProfile";
import UserOrders from "./user/UserOrders";
import ShopNow from "./pages/products/ShopNow";
import SingleProductPage from "./pages/products/SingleProduct";
import OverView from "./admin/OverView";
import Orders from "./admin/Orders";
import AllCustomers from "./admin/AllCustomers";
import AdminProfile from "./admin/AdminProfile";
import Deposits from "./admin/Deposits";
import UserLayout from "./components/UserLayout";

const publicRoutes = [
  { path: "/", element: <Login /> },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Signup /> },
  { path: "*", element: <NotFoundPage /> },
];

const adminRoutes = [
  {
    path: "/admin",
    element: (
      <AuthGuard>
        <UserLayout />
      </AuthGuard>
    ),
    children: [
      { path: "/admin", element: <Navigate to="dashboard" /> },
      { path: "dashboard", element: <OverView /> },
      { path: "orders", element: <Orders /> },
      { path: "all-customers", element: <AllCustomers /> },
      { path: "today-sales", element: <Deposits /> },
      { path: "profile", element: <AdminProfile /> },
      { path: "reports", element: <Deposits /> },
    ],
  },
  ...publicRoutes,
];

const userRoutes = [
  {
    path: "/user",
    element: (
      <AuthGuard>
        <UserLayout />
      </AuthGuard>
    ),
    children: [
      { path: "/user", element: <Navigate to="shop" /> },
      { path: "profile", element: <UserProfile /> },
      { path: "orders", element: <UserOrders /> },
      { path: "shop", element: <ShopNow /> },
      { path: "product/:id", element: <SingleProductPage /> },
    ],
  },
  ...publicRoutes,
];

const Routes = () => {
  const data = JSON.parse(localStorage.getItem("data"));
  return useRoutes(data?.user?.role === 1 ? adminRoutes : userRoutes);
};

export default Routes;
