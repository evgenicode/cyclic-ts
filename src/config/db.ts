import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

<<<<<<< HEAD
const MONGO_URI = process.env.MONGO_URI_DEV;
=======
const MONGO_URI = process.env.MONGO_URI;
>>>>>>> 8f252b7d659a6ba11d475fddeac06f0a969668e8

export const connectDB = async () => {
  if (!MONGO_URI) {
    console.error("MongoDB URI is not defined in the environment variable");
    process.exit(1);
  }

  try {
    const conn = await mongoose.connect(MONGO_URI);

    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
