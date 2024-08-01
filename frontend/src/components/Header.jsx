import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../assets/logo/logo.png";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import Menu from "@mui/material/Menu";

const logoStyle = {
  width: "140px",
  height: "auto",
  cursor: "pointer",
  padding: "10px",
};

function Header() {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const data = JSON.parse(localStorage.getItem("data"));
  const isLoggedIn = data?.success;
  const username = isLoggedIn ? `${data.user.first_name}` : "";
//  console.log(data.user.role);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("data");
    navigate("/login");
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: 0,
          bgcolor: "transparent",
          backgroundImage: "none",
          mt: 2,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            variant="regular"
            sx={(theme) => ({
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexShrink: 0,
              borderRadius: "999px",
              bgcolor:
                theme.palette.mode === "light"
                  ? "rgba(255, 255, 255, 0.4)"
                  : "rgba(0, 0, 0, 0.4)",
              backdropFilter: "blur(24px)",
              maxHeight: 40,
              border: "1px solid",
              borderColor: "divider",
              boxShadow:
                theme.palette.mode === "light"
                  ? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
                  : "0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)",
            })}
          >
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                alignItems: "center",
                ml: "-18px",
                px: 0,
              }}
            >
              <img
                src={logo}
                style={logoStyle}
                alt="ecstore"
                onClick={() => navigate("/")}
              />
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <>
                  <MenuItem onClick={() => navigate("/user/profile")}>
                    <Typography variant="body2" color="text.primary">
                      Profile
                    </Typography>
                  </MenuItem>
                  <MenuItem onClick={() => navigate("/user/orders")}>
                    <Typography variant="body2" color="text.primary">
                      My Orders
                    </Typography>
                  </MenuItem>
                  <MenuItem onClick={() => navigate("/user/shop")}>
                    <Typography variant="body2" color="text.primary">
                      Shop Now
                    </Typography>
                  </MenuItem>
                </>
              </Box>
            </Box>

            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                gap: 0.5,
                alignItems: "center",
              }}
            >
              <>
                <Typography variant="body2" color="text.primary">
                  Welcome
                  <b> {username}</b>
                </Typography>

                <Box sx={{ flexGrow: 0 }}>
                  <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <Avatar
                        alt="Remy Sharp"
                        src="https://i.postimg.cc/Hsmx0S3B/place-Holder.webp"
                      />
                    </IconButton>
                  </Tooltip>
                  <Menu
                    sx={{ mt: "45px" }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    <MenuItem onClick={handleLogout}>
                      <Typography textAlign="center">Logout</Typography>
                    </MenuItem>
                  </Menu>
                </Box>
              </>
            </Box>
            <IconButton aria-label="Open Cart">
              <Badge badgeContent={2} color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
            <Box sx={{ display: { sm: "", md: "none" } }}>
              <Button
                variant="text"
                color="primary"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{ minWidth: "30px", p: "4px" }}
              >
                <MenuIcon />
              </Button>

              <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                <Box
                  sx={{
                    minWidth: "60dvw",
                    p: 2,
                    backgroundColor: "background.paper",
                    flexGrow: 1,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "end",
                      flexGrow: 1,
                    }}
                  ></Box>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography
                      variant="body2"
                      color="text.primary"
                      sx={{ flex: 1, textAlign: "left" }}
                    >
                      Welcome <b>{username}</b>
                    </Typography>

                    <Box sx={{ flexGrow: 0 }}>
                      <IconButton sx={{ p: 0 }}>
                        <Avatar
                          sx={{ m: "10px" }}
                          alt="Remy Sharp"
                          src="https://i.postimg.cc/Hsmx0S3B/place-Holder.webp"
                        />
                      </IconButton>
                    </Box>
                  </Box>

                  <Divider />
                  <>
                    <MenuItem onClick={() => navigate("/user/profile")}>
                      <Typography variant="body2" color="text.primary">
                        Profile
                      </Typography>
                    </MenuItem>
                    <MenuItem onClick={() => navigate("/user/orders")}>
                      <Typography variant="body2" color="text.primary">
                        My Orders
                      </Typography>
                    </MenuItem>
                    <MenuItem onClick={() => navigate("/user/shop")}>
                      <Typography variant="body2" color="text.primary">
                        Shop Now
                      </Typography>
                    </MenuItem>
                  </>

                  <Divider />

                  <Button
                    color="primary"
                    variant="contained"
                    onClick={handleLogout}
                    sx={{ width: "100%" }}
                  >
                    Logout
                  </Button>
                </Box>
              </Drawer>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

export default Header;
