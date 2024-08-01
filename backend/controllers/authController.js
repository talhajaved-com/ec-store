import User_Model from "../models/authModel.js";
import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import jwt from "jsonwebtoken";

// POST: Register a new user
export const auth_register_controller = async (req, res) => {
  try {
    const { first_name, last_name, email, password } = req.body;

    // Basic input validation
    if (!first_name || !last_name || !email || !password) {
      return res.status(400).send({
        success: false,
        message: "All fields are required.",
      });
    }

    const existingUser = await User_Model.findOne({ email });
    if (existingUser) {
      return res.status(400).send({
        success: false,
        message: "Email already exists.",
      });
    }

    // Hash password
    const hashedPassword = await hashPassword(password);

    // Create user
    const newUser = new User_Model({
      first_name,
      last_name,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(201).send({
      success: true,
      message: "User registered successfully.",
      user: newUser,
    });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).send({
      success: false,
      message: "Error registering user.",
      error: error.message,
    });
  }
};

// POST: User login
export const auth_login_controller = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).send({
        success: false,
        message: "Invalid email or password.",
      });
    }

    const user = await User_Model.findOne({ email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Email is not registered.",
      });
    }

    // Validate password using bcrypt
    const isMatch = await comparePassword(password, user.password);
    if (!isMatch) {
      return res.status(400).send({
        success: false,
        message: "Invalid password.",
      });
    }

    const token = jwt.sign(
      {
        _id: user._id,
      },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.cookie("jwt", token, {
      httpOnly: true,
      secure: process.env.DEV_MODE !== "development",
      sameSite: "strict",
      maxAge: 24 * 60 * 60 * 1000,
    });
    res.status(200).send({
      success: true,
      message: "Login successful.",
      user: {
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        role: user.role,
      },
      token,
    });
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).send({
      success: false,
      message: "Error logging in.",
      error: error.message,
    });
  }
};

export const auth_logout_controller = async (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });

  res
    .status(200)
    .json({ data: null, message: "Logged out successfully", success: true });
};
