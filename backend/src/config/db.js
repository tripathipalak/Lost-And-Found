import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const MONGODB_URL = process.env.MONGODB_URL || "mongodb://localhost:27017/lost_and_found";

const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URL, {
      // mongoose 7+ has reasonable defaults
    });
    console.log("MongoDB connected");
  } catch (err) {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  }
};

export default connectDB;
