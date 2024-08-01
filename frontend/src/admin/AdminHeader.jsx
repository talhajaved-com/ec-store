import { styled } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";

const AppBar = styled(MuiAppBar)({
  position: "sticky",
  zIndex: 1200, 
});

export default function AdminHeader() {
  const navigate = useNavigate();

  return (
    <AppBar>
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ marginRight: "16px" }}
        >
          
        </IconButton>
        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          sx={{ flexGrow: 1 }}
        >
          Dashboard
        </Typography>
        <Button
          variant="contained"
          onClick={() => {
            localStorage.removeItem("data");
            navigate("/login");
          }}
        >
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
}
