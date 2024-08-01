import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import Footer from "./Footer";
import Header from "./Header";
import AdminHeader from "./../admin/AdminHeader";
import AdminSidebar from "./../admin/AdminSidebar";

const UserLayout = () => {
  const data = JSON.parse(localStorage.getItem("data"));
  const isAdmin = data?.user?.role === 1;

  return (
    <>
      {isAdmin ? (
        <>
          <AdminSidebar />
          <AdminHeader />
          <Outlet />
        </>
      ) : (
        <>
          <Header />
          <Box>
            <Outlet />
          </Box>
          <Footer />
        </>
      )}
    </>
  );
};

export default UserLayout;
