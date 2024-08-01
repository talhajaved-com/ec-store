import { useEffect, useState } from "react";
import { Container, Grid, Card, CardContent, Typography, Button, CircularProgress, Box } from "@mui/material";
import axios from "axios";
import { toast } from "react-toastify";

const { VITE_API_URL } = import.meta.env;

const AllCustomers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const result = await axios.get(`${VITE_API_URL}/api/v1/users`);
        setUsers(result.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching users:", error);
        setError("Failed to fetch users.");
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return (
      <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'calc(100vh - 80px)', marginTop: '80px' }}>
        <CircularProgress />
      </Container>
    );
  }

  if (error) {
    return (
      <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'calc(100vh - 80px)', marginTop: '80px' }}>
        <Typography variant="h6" color="error">{error}</Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ marginTop: "80px" }}>
      <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold', marginBottom: '20px' }}>
        Users List
      </Typography>
      <Grid container spacing={3}>
        {users.map(user => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={user._id}>
            <Card sx={{ borderRadius: "10px", boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {user.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  Email: {user.email}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  Role: {user.role}
                </Typography>
                <Box sx={{ marginTop: 2, textAlign: 'center' }}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => toast.info(`View details for ${user.name}`)}
                  >
                    View Details
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default AllCustomers;
