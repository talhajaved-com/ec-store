
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import {
  Card,
  CardHeader,
  CardContent,
  Button,
  CardActions,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { getProducts, deleteProduct } from "../../api_Calls/ProductApiCalls";

const ProductsList = () => {
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

  const handleDelete = async (id) => {
    try {
      await deleteProduct(id);
      setProducts((previousProducts) =>
        previousProducts.filter((item) => item._id !== id)
      );
      toast.success("Product Deleted");
    } catch (error) {
      toast.error("Failed to delete product");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Box sx={{ flexGrow: 1, padding: "2px", marginTop:"100px",}}>
      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product._id}>
            <Box
              sx={{
                padding: "3px",
                boxSizing: "border-box",
                display: "flex",
                justifyContent: "center",
                marginTop: "20px",
                alignItems: "center",
              }}
            >
              <Card
                sx={{
                  borderRadius: "calc(8px*0.5)",
                  boxShadow: "0px 0px calc(3px * 0.4) gray",
                  fontFamily: "var(--theme-font-family)",
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "#ffffff3f",
                  maxWidth: "250px",
                }}
              >
                <CardHeader
                  sx={{
                    "& .MuiCardHeader-content": { display: "none" },
                    "& .MuiCardHeader-action": {
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      height: "100%",
                    },
                  }}
                  action={
                    <img
                      src={`${import.meta.env.VITE_API_URL}/${product.photo}`}
                      alt="Product Image"
                      style={{
                        borderRadius: "5px",
                        objectFit: "cover",
                        objectPosition: "top",
                        maxHeight: "150px",
                        width: "100%",
                      }}
                    />
                  }
                />
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    rowGap: "2px",
                    fontSize: "14px",
                    textAlign: "center",
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      fontFamily: "var(--theme-font-family)",
                      color: "var(--theme-color-base)",
                      fontSize: "17px",
                    }}
                  >
                    {product.name}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontFamily: "var(--theme-font-family)",
                      color: "var(--base-medium)",
                      fontSize: "16px",
                    }}
                  >
                    Quantity: {product.quantity}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontFamily: "var(--theme-font-family)",
                      color: "var(--theme-color-base)",
                      fontSize: "16px",
                    }}
                  >
                    ${product.price}
                  </Typography>
                </CardContent>
                <CardActions
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    rowGap: "10px",
                    marginTop: "auto",
                  }}
                >
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
                      padding: "10px",
                      width: "100%",
                      justifyContent: "center",
                      boxSizing: "border-box",
                    }}
                    onClick={() => nav(`/update/${product._id}`)}
                  >
                    Edit
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
                      background: "red",
                      fontFamily: "var(--theme-font-family)",
                      "&:hover": {
                        backgroundColor: "darkred",
                      },
                      gap: "8px",
                      textTransform: "none",
                      fontSize: "14px",
                      width: "100%",
                      justifyContent: "center",
                      boxSizing: "border-box",
                    }}
                    onClick={() => handleDelete(product._id)}
                  >
                    Delete
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
                      background: "green",
                      fontFamily: "var(--theme-font-family)",
                      "&:hover": {
                        backgroundColor: "darkgreen",
                      },
                      gap: "8px",
                      textTransform: "none",
                      fontSize: "14px",
                      padding: "10px",
                      width: "100%",
                      justifyContent: "center",
                      boxSizing: "border-box",
                    }}
                    onClick={() => nav(`/product/${product._id}`)}
                  >
                    View Details
                  </Button>
                </CardActions>
              </Card>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductsList;
