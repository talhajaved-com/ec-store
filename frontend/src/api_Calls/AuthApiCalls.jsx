import axios from "axios";
import { toast } from "react-toastify";

const { VITE_API_URL } = import.meta.env;

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${VITE_API_URL}/api/v1/auth/login`, {
      email,
      password,
    });
    toast.success("Login Success");
    return response.data;
  } catch (error) {
    toast.error("Login failed");
  
  }
};

export const signup = async (firstName, lastName, email, password) => {
  try {
    const response = await axios.post(`${VITE_API_URL}/api/v1/auth/signup`, {
      first_name: firstName,
      last_name: lastName,
      email,
      password,
    });
    toast.success("Register Success");
    return response.data;
  } catch (error) {
    toast.error("Register failed");

  }
};
