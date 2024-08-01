import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  Grid,
  Typography,
  Button,
  Card,
  CardMedia,
  CircularProgress,
  Box,
  Divider,
  IconButton,
} from "@mui/material";
import axios from "axios";
import { toast } from "react-toastify";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const { VITE_API_URL } = import.meta.env;

const SingleProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const result = await axios.get(`${VITE_API_URL}/api/v1/product/${id}`);
        setProduct(result.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product data:", error);
        setError("Failed to fetch product details.");
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "calc(100vh - 80px)",
          marginTop: "80px",
        }}
      >
        <CircularProgress />
      </Container>
    );
  }

  if (error) {
    return (
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "calc(100vh - 80px)",
          marginTop: "80px",
        }}
      >
        <Typography variant="h6" color="error">
          {error}
        </Typography>
      </Container>
    );
  }

  if (!product) {
    return (
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "calc(100vh - 80px)",
          marginTop: "80px",
        }}
      >
        <Typography variant="h6">Product not found</Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ marginTop: "100px" }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Card sx={{ borderRadius: "10px", boxShadow: 3 }}>
            <CardMedia
              component="img"
              height="auto"
              image={`${VITE_API_URL}/${product.photo}`}
              alt={product.name}
              sx={{
                objectFit: "contain",
                height: "100%",
                width: "100%",
                maxHeight: "600px",
              }}
            />
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ padding: 3 }}>
            <Typography variant="h3" gutterBottom sx={{ fontWeight: "bold" }}>
              {product.name}
            </Typography>
            <Box
              sx={{ display: "flex", alignItems: "center", marginBottom: 2 }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", marginRight: 1 }}
              >
                ${product.price}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {product.quantity} Available
              </Typography>
            </Box>
            <Divider sx={{ marginY: 2 }} />
            <Typography variant="body1" paragraph>
              {product.description}
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", marginY: 2 }}>
              <IconButton>
                <StarIcon color="primary" />
              </IconButton>
              <IconButton>
                <StarIcon color="primary" />
              </IconButton>
              <IconButton>
                <StarIcon color="primary" />
              </IconButton>
              <IconButton>
                <StarBorderIcon />
              </IconButton>
              <IconButton>
                <StarBorderIcon />
              </IconButton>
              <Typography variant="body2" sx={{ marginLeft: 1 }}>
                3.0 (100 reviews)
              </Typography>
            </Box>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={{ padding: 1.5, fontSize: "16px" }}
              onClick={() =>
                toast.success("Add to Cart functionality not implemented")
              }
            >
              Add to Cart
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SingleProductPage;
