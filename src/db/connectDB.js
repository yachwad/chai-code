import mongoose from "mongoose";
import { db_name } from "../constants.js";
const connectDB = async () => {
  try {
    const connectInstance = await mongoose.connect(
      `${process.env.MONGO_DB}/${db_name}`,
    );
    console.log(
      `database connection successfully connected ${connectInstance.connection.host}`,
    );
  } catch (error) {
    console.error(`database connection si failed ${error}`);
  }
};

export default connectDB;
