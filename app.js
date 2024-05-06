import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectDatabase from "./database/database.js";
import middleware from "./middleware/error.js";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

if (process.env.NODE_ENV !== "production") {
  dotenv.config({ path: "./config/config.env" });
}

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

//import routes
import userRoute from "./routes/userRoute.js";

//user routes
app.use("/api/v1", userRoute);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "/client/dist")));

app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/dist/index.html"));
});

//database
connectDatabase();

//error middleware
app.use(middleware);

export default app;
