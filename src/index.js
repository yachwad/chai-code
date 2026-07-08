import dotenv from "dotenv";
import connectDB from "./db/connectDB.js";
import { app } from "./app.js";
import { PORT } from "./constants.js";
dotenv.config();

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      try {
        console.log(`server running is successfully ${PORT}`);
      } catch (error) {
        console.log(`server is failed ${error}`);
      }
    });
  })
  .catch((error) => {
    throw error;
  });
