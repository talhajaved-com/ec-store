import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { List, ListItem, ListItemText, Switch } from "@mui/material";
import { toast } from "react-toastify";
import { getUsers } from "../api_Calls/AuthApiCalls";

const AllCustomers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const fetchedUsers = await getUsers();
        setUsers(fetchedUsers);
      } catch (error) {
        console.error("Failed to fetch users:", error);
        toast.error("Failed to fetch users");
      }
    };
    fetchUsers();
  }, []);


  const handleRoleChange = async (userId, currentRole) => {
    try {
      const newRole = currentRole === 1 ? 0 : 1;
      setUsers(users.map(user => user._id === userId ? { ...user, role: newRole } : user));
      toast.success("Role updated successfully");
    } catch (error) {
      console.error("Failed to update role:", error);
      toast.error("Failed to update role");
    }
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        padding: "5px",
        marginTop: "100px",
        backgroundColor: "#f9f9f9",
      }}
    >
      <Typography
        variant="h4"
        align="center"
        sx={{ marginBottom: "2rem", color: "#333" }}
      >
        All Customers
      </Typography>
      <List>
        {users.map((user) => (
          <ListItem
            key={user._id}
            sx={{
              borderBottom: "1px solid #ddd",
              borderRadius: "8px",
              marginBottom: "1rem",
              backgroundColor: user.role === 1 ? "#ffe6e6" : "#fff",
              color: user.role === 1 ? "red" : "inherit",
              "&:hover": {
                backgroundColor: user.role === 1 ? "#ffd6d6" : "#f5f5f5",
                cursor: "pointer",
              },
            }}
            secondaryAction={
              <Switch
                checked={user.role === 1}
                onChange={() => handleRoleChange(user._id, user.role)}
              />
            }
          >
            <ListItemText
              primary={`${user.first_name} ${user.last_name}`}
              secondary={`Email: ${user.email} | Role: ${user.role === 1 ? "Admin" : "User"}`}
              sx={{ flex: 1 }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default AllCustomers;
