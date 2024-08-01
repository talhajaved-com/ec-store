import jwt from "jsonwebtoken";
import User_Model from "../models/authModel.js";


export default async (req, res, next) => {
  let token;

  // Read JWT from the 'jwt' cookie
  token = req?.cookies?.jwt;
  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User_Model.findById(decoded.userID).select("-password");

      next();
    } catch (error) {
      console.error(error);
      res.status(401);
      throw new Error("Not authorized, token failed");
    }
  } else {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
};
