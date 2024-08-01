import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";

import { mainListItems } from "./listItems";
const drawerWidth = 170;

const AdminSidebar = () => {
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          position: "fixed",
          top: 64,
          height: `calc(100vh - 64px)`,
          left: 0,
          zIndex: 1200,
        },
      }}
    >
      <Divider />
      <List>{mainListItems}</List>
    </Drawer>
  );
};

export default AdminSidebar;
