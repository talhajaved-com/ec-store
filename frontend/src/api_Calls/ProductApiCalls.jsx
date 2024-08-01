import axios from "axios";
const { VITE_API_URL } = import.meta.env;

const getProducts = async () => {
  try {
    const response = await axios.get(`${VITE_API_URL}/api/v1/product/all`);
    return response?.data;
  } catch (error) {
    console.error(error);
  }
};

const getProductById = async (id) => {
  try {
    const response = await axios.get(`${VITE_API_URL}/api/v1/product/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const addProduct = async (productData) => {
  try {
    const formData = new FormData();
    for (const key in productData) {
      formData.append(key, productData[key]);
    }
    const response = await axios.post(
      `${VITE_API_URL}/api/v1/product/add`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const deleteProduct = async (id) => {
  try {
    const response = await axios.delete(`${VITE_API_URL}/api/v1/product/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export { getProducts, getProductById, addProduct, deleteProduct };
