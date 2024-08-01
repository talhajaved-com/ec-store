import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Card, CardContent, Button, CardActions } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getProducts } from "../../api_Calls/ProductApiCalls";
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';


const ShopNow = () => {
  const [products, setProducts] = useState([]);
  const nav = useNavigate();

  const fetchProducts = async () => {
    try {
      const fetchedProducts = await getProducts();
      setProducts(fetchedProducts);
    } catch (error) {
      console.error("Failed to fetch products:", error);
      toast.error("Failed to fetch products");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleAddToCart = () => {
    toast.success("Product added to cart");
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
        Shop Now
      </Typography>
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product._id}>
            <Card
              sx={{
                borderRadius: "12px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                backgroundColor: "#fff",
                overflow: "hidden",
                transition: "transform 0.3s",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            >
              <CardContent
                sx={{
                  textAlign: "center",
                }}
              >
                <img
                  src={`${import.meta.env.VITE_API_URL}/${product.photo}`}
                  alt={product.name}
                  style={{
                    borderRadius: "8px",
                    objectFit: "cover",
                    width: "100%",
                    height: "auto",
                    maxHeight: "200px",
                    marginBottom: "0.5rem",
                  }}
                />
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    marginBottom: "0.5rem",
                    color: "#333",
                  }}
                >
                  {product.name}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#555",
                  }}
                >
                  Quantity: {product.quantity}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#333",
                    fontWeight: "bold",
                  }}
                >
                  ${product.price}
                </Typography>
              </CardContent>
              <CardActions
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "1rem",
                  padding: "1rem",
                }}
              >
                <Button
                  variant="contained"
                  color="success"
                  sx={{
                    borderRadius: "8px",
                    textTransform: "none",
                    fontSize: "14px",
                    fontWeight: "bold",
                  }}
                  onClick={() => handleAddToCart(product._id)}
                >
                  <AddShoppingCartOutlinedIcon/> 
                </Button>
                <Button
                  disableElevation
                  variant="contained"
                  sx={{
                    borderRadius: "calc(8px*0.5)",
                    boxShadow:
                      "0px 0px calc(3px * 0.4) var(--primary-low-dark)",
                    border: "none",
                    color: "white",
                    background: "blue",
                    fontFamily: "var(--theme-font-family)",
                    "&:hover": {
                      backgroundColor: "darkblue",
                    },
                    gap: "8px",
                    textTransform: "none",
                    fontSize: "14px",
                    width: "100%",
                    justifyContent: "center",
                    boxSizing: "border-box",
                  }}
                  onClick={() => nav(`/user/product/${product._id}`)}
                >
                  View Details
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ShopNow;
