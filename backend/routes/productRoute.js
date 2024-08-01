import express from "express";
import multer from "multer";
import path from "path";
import {
  productController,
  getProducts,
  deleteProduct,
  singleProduct,
  updateProduct,
} from "../controllers/productController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

// Set up storage engine for Multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

// Routes
router.post("/add", authMiddleware, upload.single("image"), productController); // Using Multer middleware
router.get("/all", getProducts);
router.delete("/:id", deleteProduct);
router.get("/:id", singleProduct);
router.put("/:id", updateProduct);

export default router;