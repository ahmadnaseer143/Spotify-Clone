import mongoose from "mongoose";

export const connectToDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDb", conn.connection.host);
  } catch (error) {
    console.log("Error connecting to db", error);
    process.exit(1);
  }
};
