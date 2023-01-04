import cors from "cors";
import * as dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";

// import moviesRouter from "./routers/movies.js";
dotenv.config();

const app = express();
app.use(express.json({ limit: "30mb" }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// app.use("/movies", moviesRouter);

mongoose.set("strictQuery", false);

mongoose
  .connect(`${process.env.DB_URL}`)
  .then(() => {
    app.listen(`${process.env.PORT}`, () => {
      console.log("App is running...");
    });
  })
  .catch((error) => {
    console.log("Error: " + error);
  });
