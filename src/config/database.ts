import mongoose from "mongoose";

const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(process.env.MONGODB_URI!);
    console.log("Database connected!");
  } catch (error) {
    console.error("Database connection failed!");
  }
};

export default connectDB;
