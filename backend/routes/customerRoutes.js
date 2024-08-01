import express from "express";
import {
  getAllCustomers,
} from "../controllers/customerController.js";

const router = express.Router();

router.get("/all-customers", getAllCustomers);

export default router;
