import mongoose from "mongoose";

const user_schema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
        type: Number,
        default: 0,
      }
  },
  { timestamps: true }
);
export default mongoose.model("User_Model", user_schema);
