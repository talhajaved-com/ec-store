import mongoose from "mongoose";
import colors from "colors";

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URL, {});
    console.log(
      `MongoDB connected: ${connection.connection.host}`.bgGreen.white
    );
  } catch (error) {
    console.log(`Error in Connection ${error}`.bgRed.white);
  }
};

export default connectDB;
