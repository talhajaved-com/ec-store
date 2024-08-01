import { styled } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "@mui/material";

const AppBar = styled(MuiAppBar)({
  position: "sticky",
  zIndex: 1200,
});

const StyledMenuItem = styled(MenuItem)({
  fontSize: "16px",
  padding: "10px 20px",
});

const LogoutButton = styled(Button)({
  marginLeft: "auto",
  backgroundColor: "#ff4d4d",
  color: "#fff",
  "&:hover": {
    backgroundColor: "#e60000",
  },
  display: "flex",
  alignItems: "center",
});

export default function AdminHeader() {
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <AppBar>
      <Toolbar>
        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          sx={{ flexGrow: 1 }}
        >
          EC Dashboard
        </Typography>
        {!isMobile && (
          <>
            <StyledMenuItem onClick={() => navigate("/admin/dashboard")}>
              Dashboard
            </StyledMenuItem>
            <StyledMenuItem onClick={() => navigate("/admin/orders")}>
              Orders
            </StyledMenuItem>
            <StyledMenuItem onClick={() => navigate("/admin/all-customers")}>
              All Customers
            </StyledMenuItem>
            <StyledMenuItem onClick={() => navigate("/admin/today-sales")}>
              Today Sales
            </StyledMenuItem>
            <StyledMenuItem onClick={() => navigate("/admin/profile")}>
              Profile
            </StyledMenuItem>
            <StyledMenuItem onClick={() => navigate("/admin/reports")}>
              Reports
            </StyledMenuItem>
          </>
        )}
        <LogoutButton
          variant="contained"
          onClick={() => {
            localStorage.removeItem("data");
            navigate("/login");
          }}
        >
          Logout
        </LogoutButton>
      </Toolbar>
    </AppBar>
  );
}
