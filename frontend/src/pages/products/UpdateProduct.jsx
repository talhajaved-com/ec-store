import { useState, useEffect } from "react";
import axios from "axios";
import { TextField, Button, Box, Typography } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const { VITE_API_URL } = import.meta.env;

const UpdateProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [selectedFile, setSelectedFile] = useState(null);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [photo, setPhoto] = useState("");

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  useEffect(() => {
    const getSingleProduct = async () => {
      try {
        const result = await axios.get(`${VITE_API_URL}/api/v1/product/${id}`);
        setName(result.data.name);
        setQuantity(result.data.quantity);
        setCategory(result.data.category);
        setPrice(result.data.price);
        setPhoto(result.data.photo);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    getSingleProduct();
  }, [id]); 

  const updateUser = async () => {
    try {
      await axios.put(`${VITE_API_URL}/api/v1/product/${id}`, {
        name,
        quantity,
        category,
        price,
      });
      toast.success("Product Updated");
      navigate("/products");
    } catch (error) {
      console.error("Error updating product:", error);
      toast.error("Failed to update product. Please try again.");
    }
  };

  return (
    <center>
      <Box sx={{ maxWidth: 300, margin: "auto", padding: "20px" }}>
        <Typography
          variant="h4"
          sx={{ marginTop: "100px", alignItems: "center" }}
        >
          Update Product
        </Typography>
        <TextField
          name="name"
          label="Name"
          variant="outlined"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
          margin="normal"
        />
        <TextField
          name="quantity"
          label="Quantity"
          type="number"
          variant="outlined"
          fullWidth
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          margin="normal"
        />
        <TextField
          name="category"
          label="Category"
          variant="outlined"
          fullWidth
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          margin="normal"
        />
        <TextField
          name="price"
          label="Price"
          type="number"
          variant="outlined"
          fullWidth
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          margin="normal"
        />
        {selectedFile && (
          <img
            src={URL.createObjectURL(selectedFile)}
            alt="Selected Image"
            style={{
              borderRadius: "5px",
              objectFit: "cover",
              objectPosition: "top",
              maxHeight: "150px",
              width: "100%",
              margin: "10px 0",
            }}
          />
        )}
        {!selectedFile && photo && (
          <img
            src={`${VITE_API_URL}/${photo}`}
            alt="Product Image"
            style={{
              borderRadius: "5px",
              objectFit: "cover",
              objectPosition: "top",
              maxHeight: "150px",
              width: "100%",
              margin: "10px 0",
            }}
          />
        )}
        <input
          type="file"
          id="product-image"
          name="image"
          onChange={handleFileChange}
          style={{ margin: "20px 0" }}
        />
        <Button
          variant="contained"
          color="primary"
          sx={{ marginTop: "20px", marginBottom: "80px" }}
          onClick={updateUser}
        >
          Update Product
        </Button>
      </Box>
    </center>
  );
};

export default UpdateProduct;
