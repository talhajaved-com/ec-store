import express from "express";
import connectDB from "./database/dbConnect.js";
import productRoute from "./routes/productRoute.js";
import authRoutes from "./routes/authRoutes.js";
import customerRoutes from "./routes/customerRoutes.js";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";

// The Rest Object
const app = express();
// config env
dotenv.config();

app.use(express.json());
// Cors
app.use(cors());

// Connect to MongoDB
connectDB();

const __dirname = path.resolve();

// Routes
app.use("/api/v1/product", productRoute);
app.use("/api/v1/customer", customerRoutes);
app.use("/api/v1/auth", authRoutes);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

const PORT = process.env.PORT || 8080;
// Start the server
app.listen(PORT, () => {
  console.log(
    `Server Running on ${process.env.DEV_MODE} Mode using ${PORT} Port`.bgWhite
      .white
  );
});
