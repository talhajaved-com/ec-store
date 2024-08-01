import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
// import Box from "@mui/material/Box";

import { mainListItems } from "./listItems";
const drawerWidth = 170;

const AdminSidebar = () => {
  return (
    <Drawer
      // variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          // width: drawerWidth,
          position: "fixed",
          top: 64, // Adjust this based on your header height
          height: `calc(100vh - 64px)`, // Full height minus header height
          left: 0,
          zIndex: 1200, // Ensure it's above other content
        },
      }}
    >
      <Divider />
      <List>{mainListItems}</List>
    </Drawer>
  );
};

export default AdminSidebar;
