import dotenv from "dotenv";
dotenv.config({
  path: "./.env",
});
import { app } from "./app.js";

import connectDB from "./db/index.js";

const PORT = process.env.PORT || 7000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection error", err);
  });
