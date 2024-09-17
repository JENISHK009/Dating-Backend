// config/db.js
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Load .env file
console.log("process.env.MONGO_URI :>> ", process.env.MONGO_URI);
const connectDB = async () => {
  try {
    mongoose
      .connect(process.env.MONGO_URI)
      .then(() => console.log("MongoDB connected"))
      .catch((err) => console.error("Connection failed", err));
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
};

export default connectDB;