import {
  Container,
  Typography,
  Card,
  CardContent,
  Chip,
  Grid,
} from "@mui/material";
import { styled } from "@mui/system";

const orders = [
  {
    id: "12345",
    items: ["Product 1", "Product 2"],
    total: 29.99,
    status: "Complete",
  },
  { id: "67890", items: ["Product 3"], total: 19.99, status: "Pending" },
  {
    id: "12345",
    items: ["Product 1", "Product 2"],
    total: 29.99,
    status: "Complete",
  },
  { id: "67890", items: ["Product 3"], total: 19.99, status: "Pending" }
];

const UserOrders = () => {
  return (
    <OrdersContainer>
      <Typography variant="h4" gutterBottom>
        Your Orders
      </Typography>
      <Grid container spacing={2} wrap="wrap">
        {orders.length === 0 ? (
          <Typography variant="body1">You have no orders yet.</Typography>
        ) : (
          orders.map((order, index) => (
            <Grid item xs={12} sm={6} md={4} key={`${order.id}-${index}`}>
              <OrderCard>
                <CardContent>
                  <Typography variant="h6">Order ID: {order.id}</Typography>
                  <Typography variant="body1">
                    Items: {order.items.join(", ")}
                  </Typography>
                  <Typography variant="body1">
                    Total: ${order.total.toFixed(2)}
                  </Typography>
                  <OrderStatus status={order.status} label={order.status} />
                </CardContent>
              </OrderCard>
            </Grid>
          ))
        )}
      </Grid>
    </OrdersContainer>
  );
};

export default UserOrders;

const OrdersContainer = styled(Container)({
  display: "flex",
  marginTop: "80px",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  minHeight: "100vh",
  padding: "2rem",
  "@media (max-width: 600px)": {
    padding: "1rem",
  },
});

const OrderCard = styled(Card)({
  display: "flex",
  alignItems: "center",
  width: "100%",
  maxWidth: "400px",
  margin: "0 auto",
});

const OrderStatus = styled(Chip)(({ status }) => ({
  marginTop: "1rem",
  color: status === "Complete" ? "white" : "black",
  backgroundColor: status === "Complete" ? "#4caf50" : "#ff9800",
}));
