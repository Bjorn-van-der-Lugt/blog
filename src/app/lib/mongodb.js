import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

export async function connectToDB() {
  if (!MONGODB_URI) {
    console.error("❌ Missing MONGODB_URI in .env file");
    throw new Error("Missing MONGODB_URI in environment variables");
  }

  if (mongoose.connection.readyState >= 1) {
    console.log("✅ Using existing MongoDB connection");
    return;
  }

  try {
    await mongoose.connect(MONGODB_URI, { dbName: "blog" }); 
    console.log("✅ MongoDB Connected with Mongoose");
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error);
    throw new Error("MongoDB Connection Failed");
  }
}
