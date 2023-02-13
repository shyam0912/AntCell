import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

// Routes
import AuthRoute from "./Routes/AuthRoute.js";
import UserRouter from "./Routes/UserRoute.js";
import PostRoute from "./Routes/PostRoute.js";
import UploadRoute from "./Routes/UploadRoute.js";

const app = express();

// to serve image for public
app.use(express.static("public"));
app.use("/images", express.static("images"));

// Middleware
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

dotenv.config();

mongoose.connect(process.env.MONGO_DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(process.env.PORT, () => {
  console.log(`antcell server started at port ${process.env.PORT}`);
});

// useage of routes
app.use("/auth", AuthRoute);
app.use("/user", UserRouter);
app.use("/post", PostRoute);
app.use("/upload", UploadRoute);
