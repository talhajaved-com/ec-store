
import { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { addProduct } from "../../api_Calls/ProductApiCalls";

const AddProduct = () => {
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const initialValues = {
    name: "",
    description: "",
    price: "",
    quantity: "",
    category: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, "Name must be at least 2 characters")
      .max(100, "Name must be at most 100 characters")
      .required("Name is required"),
    description: Yup.string()
      .max(100, "Description must be at most 100 characters")
      .required("Description is required"),
    price: Yup.number()
      .min(20, "Price must be at least 20")
      .max(888, "Price must be at most 888")
      .required("Price is required"),
    quantity: Yup.number()
      .min(0, "Quantity must be at least 0")
      .required("Quantity is required"),
    category: Yup.string()
      .max(100, "Category must be at most 100 characters")
      .required("Category is required"),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    const productData = { ...values, image: selectedFile };

    try {
      await addProduct(productData);
      navigate("/products");
    } catch (error) {
      console.error("Error:", error);
    }
    setSubmitting(false);
  };

  return (
    <center>
      <Typography
        sx={{ marginTop: "100px", alignItems: "center" }}
        variant="h5"
      >
        Add Product
      </Typography>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <Box sx={{ maxWidth: 300, margin: "auto", padding: "20px" }}>
              <Field
                as={TextField}
                required
                fullWidth
                id="product-name"
                name="name"
                label="Product Name"
                variant="outlined"
                margin="normal"
                helperText={
                  <ErrorMessage
                    name="name"
                    component="div"
                    style={{ color: "red" }}
                  />
                }
              />
              <Field
                as={TextField}
                fullWidth
                id="product-description"
                name="description"
                label="Product Description"
                variant="outlined"
                margin="normal"
                helperText={
                  <ErrorMessage
                    name="description"
                    component="div"
                    style={{ color: "red" }}
                  />
                }
              />
              <Field
                as={TextField}
                fullWidth
                id="product-price"
                name="price"
                label="Price"
                type="number"
                variant="outlined"
                margin="normal"
                helperText={
                  <ErrorMessage
                    name="price"
                    component="div"
                    style={{ color: "red" }}
                  />
                }
              />
              <Field
                as={TextField}
                fullWidth
                id="product-category"
                name="category"
                label="Category"
                variant="outlined"
                margin="normal"
                helperText={
                  <ErrorMessage
                    name="category"
                    component="div"
                    style={{ color: "red" }}
                  />
                }
              />
              <Field
                as={TextField}
                fullWidth
                id="product-quantity"
                name="quantity"
                label="Quantity"
                type="number"
                variant="outlined"
                margin="normal"
                helperText={
                  <ErrorMessage
                    name="quantity"
                    component="div"
                    style={{ color: "red" }}
                  />
                }
              />

              {selectedFile && (
                <img
                  src={URL.createObjectURL(selectedFile)}
                  alt="Selected File"
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
                type="submit"
                variant="contained"
                color="primary"
                disabled={isSubmitting}
                style={{ marginTop: "20px",marginBottom:"80px" }}
              >
                Add Now
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </center>
  );
};

export default AddProduct;