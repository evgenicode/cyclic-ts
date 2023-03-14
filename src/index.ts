import express, { Application } from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { connectDB } from "./config/db";

dotenv.config();

const PORT = process.env.PORT || 3000;
const app: Application = express();

app.use(express.static("build"));
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", require("./routes/apiRoutes"));

const startApp = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`listening on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

startApp();
