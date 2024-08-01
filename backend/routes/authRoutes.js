import express from "express";
import {
  auth_login_controller,
  auth_register_controller,
  auth_logout_controller,
} from "../controllers/authController.js";
import authMiddleware from "../middlewares/authMiddleware.js";
const router = express.Router();

router.post("/signup", auth_register_controller);
// Login
router.post("/login", auth_login_controller);
router.post("/logout", authMiddleware, auth_logout_controller);

export default router;
